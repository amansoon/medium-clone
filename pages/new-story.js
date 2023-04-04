import React, { useRef, useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import css from "../styles/newStory.module.css";

import { Bell2Icon, BiggerTextIcon, BlockquoteTextIcon, BoldTextIcon, ItalicTextIcon, LinkIcon, LinkTextIcon, MediumLogo, PrivateNoteIcon, SmallerTextIcon, ThreeDotIcon } from "../assets/icon/medium-icons";

import { useSelector } from "react-redux";

import avatar from "../assets/image/avatars/avatar-1.jpg";






export default function NewStory() {
  const contentRef = useRef();
  const [content, setContent] = useState('') ;
  const {name} = useSelector((state) => state.user);
  const [selectedElement, setSelectedElement] = useState();

  const [jsxArr, setJsxArr] = useState([]); 

  
  const insertElement = (tagname, index) => {
    console.log("index", index)
    const element = <Element tagname={tagname} index={index} />
    const arr = [...jsxArr];
    arr.splice(index, 0, element);
   
    console.log(arr)
    setJsxArr(arr);
  }
  
  useEffect(()=>{
    const element = <Element tagname={'p'} index={1} />
    const arr = [...jsxArr, element];
    setJsxArr(arr);
  }, [])


  const handleKeyDown = (e) => {

    if(e.keyCode === 13) {
       e.preventDefault();
    }

    setTimeout(()=>{
      let selection, current, node;
      selection = window.getSelection();
      node = selection.focusNode;
      
      if(node.nodeType===1) { 
        // node is element node
        current = node.closest('.' + css.el);
      }
      else {
        // node is text node
        current = node.parentNode.closest('.' + css.el);
      }

      setSelectedElement(current)

      // enter pressed
      if(e.keyCode===13) {

        console.log("Selected Element =", selectedElement);
        const index = parseInt(selectedElement.getAttribute('index')) + 1;

        insertElement('p', index);
      }

    }, 25)
  }


  useEffect(()=>{
    console.log(selectedElement);

  }, [selectedElement])


  const handleMouseUp = (e) => {
    let selection, current, node;
    selection = window.getSelection();
    node = selection.focusNode;

    if(node.nodeType===1) { 
      // node is element node
      current = node.closest('.' + css.el);
    }
    else {
      // node is text node
      current = node.parentNode.closest('.' + css.el);
    }

    console.log(current);
    setSelectedElement(current);
  } 


  const handleChange = (e) => {
    
  }

  const handleTitleKeyDown = (e) => {
    if(e.keyCode == 13) {
      e.preventDefault();
    }
  }

  const handleSelectionChange = (e) => {
     console.log(e);
  }
  

  return (
    <div className={css.container}>
      <header className={css.header}>
        <div className={css.wrapper}>
          <div className={css.content}>
            <div className={css.left}>
              <div className={css.logo}>
                <Link href={'/'}>
                  <a>
                    <MediumLogo />
                  </a>
                </Link>
              </div>
              <div className={css.text}>
                <span> 
                  Draft in {name} 
                  <span className={css.status}> Saved </span>
                </span>
              </div>
            </div>
            <div className={css.right}>
              <div className={css.publish}> 
                <button className={css.btn}> Publish </button>
              </div>
              <div className={css.moreActions}> 
                <button className={css.btn}> 
                  <span className={css.icon}>
                    <ThreeDotIcon />
                  </span>
                </button>
              </div>
              <div className={css.profile}>
                <div className={css.notification}>
                  <button className={css.btn}>
                    <span className={css.icon}>
                      <Bell2Icon />
                    </span>
                  </button>
                </div>
                <div className={css.userActions}>
                  <button className={css.btn}>
                    <div className={css.avatar}>
                      <Image src={avatar} layout='fill' />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className={css.main}>
        <div className={css.wrapper}>

          <HighlightMenu />

          <div className={css.handle} >
            <div className={css.text}>
              Title
            </div>
          </div>

          <article className={css.content}> 
            
            <div className={css.title}>
              <h1 contentEditable placeholder="Title" onKeyDown={handleTitleKeyDown}>

              </h1>
            </div>
            

            <section className={`${css.section} ${css.section_first}`}>
              <div className={css.section_divider}>
                <div className={css.hr}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div 
                className={css.section_content} 
                contentEditable={true} 
                onChange={handleChange} 
                onKeyDown={handleKeyDown}
                onMouseUp={handleMouseUp}
                suppressContentEditableWarning={true}
                ref={contentRef}>

                <Element tagname={'h3'} index={0} />
                
                {jsxArr.map((element, index)=> {
                  return <React.Fragment key={index}>
                    {element}
                  </React.Fragment>
                })}

              </div>
            </section>


          </article>

        </div>
      </main>
    </div>
  );
}



// ========= PARAGRAPH =========

const Element = ({tagname, index}) => {
  const ref = useRef();
  const [afterThis, setAfterThis] = useState('after--p');
  const [isTrailing, setIsTrailing] = useState(true);
  const [isSelected, setIsSelected] = useState(false);

  const [data, setData] = useState(`index: ${index} The quick brown fox`)

  if(ref.current) {
    
  }

  useEffect(()=>{
    
  })


  useEffect(()=>{
    if(ref.current) {

      const current = ref.current;
      const previous = current.previousSibling;
      const nextele = current.nextSibling;
  
      
      if(previous) {
        const tag = previous.tagName;
        if(tag === 'P') {
          setAfterThis('after--p');
        }
        else if(tag === 'H3') {
          setAfterThis('after--h3');
        }
        else if(tag === 'H4') {
          setAfterThis('after--h4');
        }
        else if(tag === 'FIGURE') {
          setAfterThis('after--figure');
        }
        else if(tag === 'BLOCKQUOTE') {
          setAfterThis('after--blockquote');
        }
        else {
          setAfterThis('');
        }
      }
      else {
          setAfterThis('');
      }

      // is trailing check
      if(!nextele) {
        setIsTrailing(true);
      }
      else {
        setIsTrailing(false)
      }
      
      // focus on element
      // current.focus();

    }



  }, [])


  // useEffect(()=>{
  //   console.log('isTrailing =', isTrailing);
  // }, [isTrailing])



  
  const handleChange = (e) => {
    setData(e.target.value);
  }

  
  if(tagname === 'p') {
    return (
      <p 
        className={`${css.el} ${css['p']} ${afterThis ? css[afterThis]: css['leading']} ${isTrailing ? css['trailing']: ''}`} 
        index={index}
        ref={ref}> 
          {data}
      </p>
    )
  }

  if(tagname === 'h3') {
    return (
      <h3 
        className={`${css.el} ${css['h3']} ${afterThis ? css[afterThis]: css['leading']} ${isTrailing ? css['trailing']: ''}`}
        index={index} 
        ref={ref}
        onChange={handleChange}> 
         {data}
      </h3>
     )
  }

  if(tagname === 'h4') {
    return (
      <h4 
        className={`${css.el} ${css['h4']} ${afterThis ? css[afterThis]: css['leading']} ${isTrailing ? css['trailing']: ''}`} 
        index={index}
        ref={ref}> 
         {data}
      </h4>
     )
  }

}




// ========= HEADING 3 ===========

const Heading3 = () => {
  

  return (
    <h3 className={`${css['h3']} ${css['after--p']}`}> Title </h3>
  )
}


// ========= HEADING 4 ===========

const Heading4 = () => {

  return (
    <h4 className={`${css['h4']} ${css['after--h4']}`}> Title h4 </h4>
  )
}

// ========= IMAGE ============

const Figure = () => {

  return (
    <figure>
      <Image src={''} layout='fill' />
      <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
    </figure>
  )
}







const HighlightMenu = () => {
  const [isLinkInputActive, setIsLinkInputActive] = useState(false);

  const [isBoldActive, setIsBoldActive] = useState(false);
  const [isItalicActive, setIsItalicActive] = useState(false);
  const [isLinkActive, setIsLinkActive] = useState(false);
  const [isBiggerActive, setIsBiggerActive] = useState(false);
  const [isSmallerActive, setIsSmallerActive] = useState(false);
  const [isBlockquoteActive, setIsBlockquoteActive] = useState(false);

  const [isBoldDisabled, setIsBoldDisabled] = useState(false);
  const [isItalicDisabled, setIsItalicDisabled] = useState(false);
  const [isLinkDisabled, setIsLinkDisabled] = useState(false);



  

  // Button click handler

  const handleBold = () => {
    setIsBoldActive(!isBoldActive);
  }

  const handleItalic = () => {
    setIsItalicActive(!isItalicActive);
  }

  const handleLink = () => {
    setIsLinkActive(!isLinkActive);
  }

  const handleBigger = () => {
    if(isBiggerActive === false) {
      setIsBoldDisabled(true)
      setIsItalicDisabled(true)
      setIsLinkDisabled(true);

      setIsBiggerActive(false)
      setIsBlockquoteActive(false)
    }
    setIsBiggerActive(!isBiggerActive)
  }
  
  const handleSmaller = () => {
    if(isSmallerActive === false) {
      setIsBoldDisabled(true)
      setIsItalicDisabled(true)
      setIsLinkDisabled(false);
    
      setIsBiggerActive(false)
      setIsBlockquoteActive(false)

    }
    setIsSmallerActive(!isSmallerActive)
  }

  const handleBlockquote = () => {
    setIsBlockquoteActive(!isBlockquoteActive)
  }



  // EFFECTS OF BUTTON CLICK
  

  // useEffect(()=>{

  //   console.log("useEffect")

  //   if(isSmallerActive) {
  //     setIsBoldDisabled(true)
  //     setIsItalicDisabled(true)
  //     setIsLinkDisabled(false);

  //     setIsBiggerActive(false)
  //     setIsBlockquoteActive(false)
  //   }

  //   if(isBiggerActive) {
  //     setIsBoldDisabled(true)
  //     setIsItalicDisabled(true)
  //     setIsLinkDisabled(true);
  
  //     setIsSmallerActive(false)
  //     setIsBlockquoteActive(false)
  //   }

  //   if(!isSmallerActive && !isBiggerActive) {
  //     setIsBoldDisabled(false)
  //     setIsItalicDisabled(false)
  //     setIsLinkDisabled(false);
  //   }

  // }, [isSmallerActive, isBiggerActive])


  useEffect(()=>{
    if(isBlockquoteActive) {
      setIsSmallerActive(false)
      setIsBiggerActive(false)
    }
  }, [isBlockquoteActive])


  return (
    <div className={`${css.highlightMenu} ${css.active}`}>
      <div className={css.inner}>
        <div className={css.buttonSet}>
          <button className={`${css.btn} ${isBoldActive ? css.active: ''} ${isBoldDisabled ? css.disabled: ''} `} onClick={handleBold} >
            <span className={css.icon}>
              <BoldTextIcon />
            </span>
          </button>
          <button  className={`${css.btn} ${isItalicActive ? css.active: ''} ${isItalicDisabled ? css.disabled: ''} `} onClick={handleItalic}>
            <span className={css.icon}>
              <ItalicTextIcon />
            </span>
          </button>
          <button  className={`${css.btn} ${isLinkActive ? css.active: ''} ${isLinkDisabled ? css.disabled: ''} `} onClick={handleLink}>
            <span className={css.icon}>
              <LinkTextIcon />
            </span>
          </button>
          <div className={css.separator}></div>
          <button  className={`${css.btn} ${isBiggerActive ? css.active: ''}`} onClick={handleBigger}>
            <span className={css.icon}>
              <BiggerTextIcon/>
            </span>
          </button>
          <button  className={`${css.btn} ${isSmallerActive ? css.active: ''}`} onClick={handleSmaller}>
            <span className={css.icon}>
              <SmallerTextIcon />
            </span>
          </button>
          <button  className={`${css.btn} ${isBlockquoteActive ? css.active: ''}`} onClick={handleBlockquote}>
            <span className={css.icon}>
              <BlockquoteTextIcon/>
            </span>
          </button>
          <div className={css.separator}></div>
          <button  className={css.btn}>
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
  )
}





