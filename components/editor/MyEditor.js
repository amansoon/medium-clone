import React, { useState, useEffect, useCallback, useMemo } from "react";
// Import the Slate editor factory.
import { createEditor, Editor, Transforms, Node, Text, Range, Element as SlateElement, } from "slate";

// Import the Slate components and React plugin.
import {ReactEditor, Slate, Editable, withReact, } from "slate-react";
import { withHistory } from "slate-history";
import { useSlateStatic, useSelected, useFocused } from "slate-react";



import css from "../../styles/editor.module.css";
import {
  Bell2Icon,
  BiggerTextIcon,
  BlockquoteTextIcon,
  BoldTextIcon,
  ItalicTextIcon,
  LinkIcon,
  LinkTextIcon,
  MediumLogo,
  PrivateNoteIcon,
  SmallerTextIcon,
  ThreeDotIcon,
} from "../../assets/icon/medium-icons";

// Add the initial value.
const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

const CustomEditor = {
  isBoldMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.bold === true,
      universal: true,
    });

    return !!match;
  },

  isItalicActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.italic === true,
      universal: true,
    });

    return !!match;
  },

  isLinkActive(editor) {
    const [link] = Editor.nodes(editor, {
      match: n =>
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === 'link',
    })
    return !!link
  },

  isCodeBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === "code",
    });

    return !!match;
  },

  isHeading2Active(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === "heading2",
    });

    return !!match;
  },

  isHeading3Active(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === "heading3",
    });

    return !!match;
  },

  isBlockquoteActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === "blockquote",
    });

    return !!match;
  },

  toggleBoldMark(editor) {
    const isActive = CustomEditor.isBoldMarkActive(editor);
    Transforms.setNodes(
      editor,
      { bold: isActive ? null : true },
      { match: (n) => Text.isText(n), split: true }
    );
  },

  toggleItalic(editor) {
    const isActive = CustomEditor.isItalicActive(editor);
    Transforms.setNodes(
      editor,
      { italic: isActive ? null : true },
      { match: (n) => Text.isText(n), split: true }
    );
  },


  toggleCodeBlock(editor) {
    const isActive = CustomEditor.isCodeBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : "code" },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  },

  toggleHeading2(editor) {
    const isActive = CustomEditor.isHeading2Active(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : "heading2" },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  },

  toggleHeading3(editor) {
    const isActive = CustomEditor.isHeading3Active(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : "heading3" },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  },

  toggleBlockquote(editor) {
    const isActive = CustomEditor.isBlockquoteActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : "blockquote" },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  },


  removeLink(editor, opts = {}){
    Transforms.unwrapNodes(editor, {
      ...opts,
      match: (n) =>
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === "link"
    });
  },
  
  createLinkNode(href, text) {
    return {
      type: "link",
      href,
      children: [{ text }]
    }
  },

  insertLink(editor, url) {
    if(!url) {
      url = 'dummyUrl'
    }
  
    const { selection } = editor;
    const link = CustomEditor.createLinkNode(url, "New Link");
  
    ReactEditor.focus(editor);
  
    if (!!selection) {
      const [parentNode, parentPath] = Editor.parent(
        editor,
        selection.focus?.path
      );
  
      // Remove the Link node if we're inserting a new link node inside of another
      // link.
      if (parentNode.type === "link") {
        CustomEditor.removeLink(editor);
      }
  
      if (editor.isVoid(parentNode)) {
        // Insert the new link after the void node
        Transforms.insertNodes(editor, createParagraphNode([link]), {
          at: Path.next(parentPath),
          select: true
        });
      } else if (Range.isCollapsed(selection)) {
        // Insert the new link in our last known location
        Transforms.insertNodes(editor, link, { select: true });
      } else {
        // Wrap the currently selected range of text into a Link
        Transforms.wrapNodes(editor, link, { split: true });
        // Remove the highlight and move the cursor to the end of the highlight
        Transforms.collapse(editor, { edge: "end" });
      }
    } else {
      // Insert the new link node at the bottom of the Editor when selection
      // is falsey
      Transforms.insertNodes(editor, createParagraphNode([link]));
    }
  }

}


function MyEditor() {
  // const [editor] = useState(() => withReact(createEditor()));
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  // Define a rendering function based on the element passed to `props`. We use
  // `useCallback` here to memoize the function for subsequent renders.
  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case "heading2":
        return <Heading2Element {...props} />;
      case "heading3":
        return <Heading3Element {...props} />;
      case "blockquote":
        return <BlockquoteElement {...props} />;
      case "code":
        return <CodeElement {...props} />;
      case "link":
        return <Link {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  // Define a leaf rendering function that is memoized with `useCallback`.
  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  return (
    <div className={css.container}>
      <HighlightMenu editor={editor} />

      <div className={css.editor}>
        <Slate editor={editor} value={initialValue}>
          <Editable
            // Pass in the `renderElement` function.
            renderElement={renderElement}
            // Pass in the `renderLeaf` function.
            renderLeaf={renderLeaf}
            placeholder="Enter some rich text…"
            // spellCheck
            autoFocus
            onChange={() => {
              // insert int database
            }}
            onKeyDown={(event) => {

              // ----- Enter key handling ----
              if (event.key === "Enter" && !event.shiftKey) {
                const selectedElement = Node.descendant(
                  editor,
                  editor.selection.anchor.path.slice(0, -1)
                );
                const selectedLeaf = Node.descendant(
                  editor,
                  editor.selection.anchor.path
                );

                console.log(editor.selection.anchor.offset);

                // headings
                if (
                  selectedElement.type === "heading2" ||
                  selectedElement.type === "heading3"
                ) {
                  if (
                    selectedLeaf.text.length === editor.selection.anchor.offset
                  ) {
                    event.preventDefault();
                    Transforms.insertNodes(editor, {
                      type: "paragraph",
                      children: [{ text: "", marks: [] }],
                    });
                  } 
                  else if (editor.selection.anchor.offset === 0) {
                    event.preventDefault();
                    Transforms.setNodes(editor, { type: selectedElement.type });
                    Transforms.insertNodes(editor, {
                      type: "paragraph",
                      children: [{ text: "", marks: [] }],
                    });
                  } 
                  else {
                    // something else
                  }
                }

                // blockquote
                if (selectedElement.type === "blockquote") {
                  if (
                    selectedLeaf.text.length === editor.selection.anchor.offset
                  ) {
                    event.preventDefault();
                    Transforms.insertNodes(editor, {
                      type: "paragraph",
                      children: [{ text: "", marks: [] }],
                    });
                  }
                }

              }

              // ---- ctrl handling ----
              if (event.ctrlKey) {
                // Replace the `onKeyDown` logic with our new commands.
                switch (event.key) {
                  case "`": {
                    event.preventDefault();
                    CustomEditor.toggleCodeBlock(editor);
                    break;
                  }

                  case "b": {
                    event.preventDefault();
                    CustomEditor.toggleBoldMark(editor);
                    break;
                  }

                  case "2": {
                    event.preventDefault();
                    CustomEditor.toggleHeading2(editor);
                    break;
                  }

                  case "3": {
                    event.preventDefault();
                    CustomEditor.toggleHeading3(editor);
                    break;
                  }
                }
              }
            }}
          />
        </Slate>
      </div>
    </div>
  );
}

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  return <span {...attributes}>{children}</span>
};


const DefaultElement = (props) => {
  return <p {...props.attributes}>{props.children}</p>;
};

const CodeElement = (props) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

const Link = ({ attributes, element, children }) => {
  const editor = useSlateStatic();
  const selected = useSelected();
  const focused = useFocused();

  return (
    <div>
      <a {...attributes} href={element.href ? element.href: 'link'}>
        {children}
      </a>
    </div>
  )
}

const Heading2Element = (props) => {
  return <h2 {...props.attributes}>{props.children}</h2>;
};

const Heading3Element = (props) => {
  return <h3 {...props.attributes}>{props.children}</h3>;
};

const BlockquoteElement = (props) => {
  return <blockquote {...props.attributes}>{props.children}</blockquote>;
};

// =========== HIGHLIGHT MENU ============

const HighlightMenu = ({ editor }) => {
  const [isLinkInputActive, setIsLinkInputActive] = useState(false);

  const [isBoldActive, setIsBoldActive] = useState(false);
  const [isItalicActive, setIsItalicActive] = useState(false);
  const [isLinkActive, setIsLinkActive] = useState(false);
  const [isHeading2Active, setIsHeading2Active] = useState(false);
  const [isHeading3Active, setIsHeading3Active] = useState(false);
  const [isBlockquoteActive, setIsBlockquoteActive] = useState(false);

  const [isBoldDisabled, setIsBoldDisabled] = useState(false);
  const [isItalicDisabled, setIsItalicDisabled] = useState(false);
  const [isLinkDisabled, setIsLinkDisabled] = useState(false);

  const [lastActiveSelection, setLastActiveSelection] = useState(Range);

  useEffect(() => {
    if (editor.selection != null) setLastActiveSelection(editor.selection)
  }, [editor.selection])

  // Button click handler
  const handleBold = () => {
    setIsBoldActive(!isBoldActive);
    CustomEditor.toggleBoldMark(editor);
 
    if (editor.selection != null) {
      setLastActiveSelection(editor.selection)
    }
    
  };

  const handleItalic = () => {
    setIsItalicActive(!isItalicActive);
    CustomEditor.toggleItalic(editor);
  };

  const handleLink = () => {
    setIsLinkActive(!isLinkActive);
    
    const url = "mylink";
    CustomEditor.insertLink(editor, url);
  };

  const handleHeading2 = () => {
    setIsHeading2Active(!isHeading2Active);
    CustomEditor.toggleHeading2(editor);
  };

  const handleHeading3 = () => {
    setIsHeading3Active(!isHeading3Active);
    CustomEditor.toggleHeading3(editor);
  };

  const handleBlockquote = () => {
    setIsBlockquoteActive(!isBlockquoteActive);
    // CustomEditor.toggleHeading3(editor);
    CustomEditor.toggleBlockquote(editor);
  };

  return (
    <div className={`${css.highlightMenu} ${css.active}`}>
      <div className={css.inner}>
        <div className={css.buttonSet}>
          <button
            className={`${css.btn} ${isBoldActive ? css.active : ""} ${
              isBoldDisabled ? css.disabled : ""
            } `}
            onClick={handleBold}
          >
            <span className={css.icon}>
              <BoldTextIcon />
            </span>
          </button>
          <button
            className={`${css.btn} ${isItalicActive ? css.active : ""} ${
              isItalicDisabled ? css.disabled : ""
            } `}
            onClick={handleItalic}
          >
            <span className={css.icon}>
              <ItalicTextIcon />
            </span>
          </button>
          <button
            className={`${css.btn} ${isLinkActive ? css.active : ""} ${
              isLinkDisabled ? css.disabled : ""
            } `}
            onClick={handleLink}
          >
            <span className={css.icon}>
              <LinkTextIcon />
            </span>
          </button>
          <div className={css.separator}></div>
          <button
            className={`${css.btn} ${isHeading2Active ? css.active : ""}`}
            onClick={handleHeading2}
          >
            <span className={css.icon}>
              <BiggerTextIcon />
            </span>
          </button>
          <button
            className={`${css.btn} ${isHeading3Active ? css.active : ""}`}
            onClick={handleHeading3}
          >
            <span className={css.icon}>
              <SmallerTextIcon />
            </span>
          </button>
          <button
            className={`${css.btn} ${isBlockquoteActive ? css.active : ""}`}
            onClick={handleBlockquote}
          >
            <span className={css.icon}>
              <BlockquoteTextIcon />
            </span>
          </button>
          <div className={css.separator}></div>
          <button className={css.btn}>
            <span className={css.icon}>
              <PrivateNoteIcon />
            </span>
          </button>
        </div>
        <div className={css.linkInput}>
          <form>
            <input type="text" placeholder="Paste or time a link.." />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyEditor;
