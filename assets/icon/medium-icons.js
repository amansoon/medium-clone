import React from "react";

const style = {
  lineHeight: 0,
  padding: 0,
  margin: 0,
};

// curved search icon

function SearchCurvedIcon() {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        fill="none"
        aria-label="search"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.8 10.69a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0zm6.95-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .79-.79l-3.73-3.73a8.05 8.05 0 0 0-5.94-13.5z"
          fill="#A8A8A8"
        ></path>
      </svg>
    </div>
  );
}

// curved filled search icon

function SearchCurvedFillIcon() {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        fill="none"
        aria-label="search"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.36 10.69a6.39 6.39 0 1 1 12.78 0 6.39 6.39 0 0 1-12.78 0zm6.39-8.61a8.61 8.61 0 1 0 5.09 15.56l3.4 3.4a1.11 1.11 0 1 0 1.57-1.57l-3.36-3.37a8.61 8.61 0 0 0-6.7-14.02z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  );
}

// Curved Home icon

function HomeCurvedIcon() {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        aria-label="home"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.72 2.93a.45.45 0 0 1 .56 0l.34-.43-.34.43 9.37 7.5a.56.56 0 1 0 .7-.86l-9.38-7.5a1.55 1.55 0 0 0-1.94 0l-9.38 7.5a.56.56 0 0 0 .7.86l9.37-7.5zm7.17 9.13v-1.4l.91.69a.5.5 0 0 1 .2.4V20a2 2 0 0 1-2 2h-4a.5.5 0 0 1-.5-.5V17a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v4.5a.5.5 0 0 1-.5.5H6a2 2 0 0 1-2-2v-8.25a.5.5 0 0 1 .2-.4l.91-.68V20c0 .5.4.89.89.89h3.39V17a2.11 2.11 0 0 1 2.11-2.11h1A2.11 2.11 0 0 1 14.61 17v3.89H18a.89.89 0 0 0 .89-.89v-7.95z"
          fill="#A8A8A8"
        ></path>
      </svg>
    </div>
  );
}

// Curved filled Home icon

function HomeCurvedFillIcon() {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-label="home"
      >
        <path
          d="M4.5 21.25V10.87c0-.07.04-.15.1-.2l7.25-5.43a.25.25 0 0 1 .3 0l7.25 5.44c.06.04.1.12.1.2v10.37c0 .14-.11.25-.25.25h-4.5a.25.25 0 0 1-.25-.25v-5.5a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v5.5c0 .14-.11.25-.25.25h-4.5a.25.25 0 0 1-.25-.25z"
          fill="currentColor"
          stroke="currentColor"
          strokeLinejoin="round"
        ></path>
        <path
          d="M22 9l-9.1-6.83a1.5 1.5 0 0 0-1.8 0L2 9"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </div>
  );
}

// Curved Bookmark icon

function BookmarkCurvedIcon() {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        className="lf"
        aria-label="Reading list"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 3a2 2 0 0 0-2 2v1H6a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4V8a2 2 0 0 0-2-2H9V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v12a.5.5 0 1 0 1 0V5a2 2 0 0 0-2-2h-9zM5 8a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v12.98l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V8z"
          fill="#757575"
        ></path>
      </svg>
    </div>
  );
}

// Curved Bookmark icon

// ============  Home ICONS ==========

function HomeIcon() {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        aria-label="Home"
      >
        <path
          d="M4.5 10.75v10.5c0 .14.11.25.25.25h5c.14 0 .25-.11.25-.25v-5.5c0-.14.11-.25.25-.25h3.5c.14 0 .25.11.25.25v5.5c0 .14.11.25.25.25h5c.14 0 .25-.11.25-.25v-10.5M22 9l-9.1-6.83a1.5 1.5 0 0 0-1.8 0L2 9"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function HomeIconFill({ classNameName }) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        aria-label="Home"
      >
        <path
          d="M4.5 21.25V10.87c0-.07.04-.15.1-.2l7.25-5.43a.25.25 0 0 1 .3 0l7.25 5.44c.06.04.1.12.1.2v10.37c0 .14-.11.25-.25.25h-4.5a.25.25 0 0 1-.25-.25v-5.5a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v5.5c0 .14-.11.25-.25.25h-4.5a.25.25 0 0 1-.25-.25z"
          fill="currentColor"
          stroke="currentColor"
          strokeLinejoin="round"
        />
        <path
          d="m22 9-9.1-6.83a1.5 1.5 0 0 0-1.8 0L2 9"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// ========== BELL ICON / NOTIFICATION ==========

function BellIcon({ classNameName }) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        aria-label="Notifications"
      >
        <path
          d="M15 18.5a3 3 0 1 1-6 0"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M5.5 10.53V9a6.5 6.5 0 0 1 13 0v1.53c0 1.42.56 2.78 1.57 3.79l.03.03c.26.26.4.6.4.97v2.93c0 .14-.11.25-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.93c0-.37.14-.71.4-.97l.03-.03c1-1 1.57-2.37 1.57-3.79z"
          stroke="currentColor"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function BellIconFill({ classNameName }) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        aria-label="Notifications"
      >
        <path
          d="M15 18.5a3 3 0 1 1-6 0"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M5.5 10.53V9a6.5 6.5 0 0 1 13 0v1.53c0 1.42.56 2.78 1.57 3.79l.03.03c.26.26.4.6.4.97v2.93c0 .14-.11.25-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.93c0-.37.14-.71.4-.97l.03-.03c1-1 1.57-2.37 1.57-3.79z"
          fill="currentColor"
          stroke="currentColor"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// ====== Bell Icon 2 =============

function Bell2Icon({ classNameName }) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="svgIcon-use"
        width="25"
        height="25"
        viewBox="-293 409 25 25"
      >
        <path d="M-273.327 423.67l-1.673-1.52v-3.646a5.5 5.5 0 00-6.04-5.474c-2.86.273-4.96 2.838-4.96 5.71v3.41l-1.68 1.553c-.204.19-.32.456-.32.734V427a1 1 0 001 1h3.49a3.079 3.079 0 003.01 2.45 3.08 3.08 0 003.01-2.45h3.49a1 1 0 001-1v-2.59c0-.28-.12-.55-.327-.74zm-7.173 5.63c-.842 0-1.55-.546-1.812-1.3h3.624a1.92 1.92 0 01-1.812 1.3zm6.35-2.45h-12.7v-2.347l1.63-1.51c.236-.216.37-.522.37-.843v-3.41c0-2.35 1.72-4.356 3.92-4.565a4.353 4.353 0 014.78 4.33v3.645c0 .324.137.633.376.85l1.624 1.477v2.373z"></path>
      </svg>
    </div>
  );
}

// ========== BOOKMARK ICONS ==========

function BookmarkIcon({ classNameName }) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        aria-label="Lists"
      >
        <path
          d="M4.5 6.25V21c0 .2.24.32.4.2l5.45-4.09a.25.25 0 0 1 .3 0l5.45 4.09c.16.12.4 0 .4-.2V6.25a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25z"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M8 6V3.25c0-.14.11-.25.25-.25h11.5c.14 0 .25.11.25.25V16.5"
          stroke="currentColor"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function BookmarkIconFill({ classNameName }) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        aria-label="Lists"
      >
        <path
          d="M4.5 6.25V21c0 .2.24.32.4.2l5.45-4.09a.25.25 0 0 1 .3 0l5.45 4.09c.16.12.4 0 .4-.2V6.25a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25z"
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M8 6V3.25c0-.14.11-.25.25-.25h11.5c.14 0 .25.11.25.25V16.5"
          stroke="currentColor"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

// ========== STORIES ICON ===========

function StoriesIcon({ classNameName }) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        aria-label="Stories"
      >
        <path
          d="M4.75 21.5h14.5c.14 0 .25-.11.25-.25V2.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v18.5c0 .14.11.25.25.25z"
          stroke="currentColor"
        />
        <path
          d="M8 8.5h8m-8 7h5M8 12h8"
          stroke="currentColor"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function StoriesIconFill({ classNameName }) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        aria-label="Stories"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 2.75c0-.41.34-.75.75-.75h14.5c.41 0 .75.34.75.75v18.5c0 .41-.34.75-.75.75H4.75a.75.75 0 0 1-.75-.75V2.75zM7 8.5c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 7c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zM7 12c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 7 12z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

// ========== WRITE ICON ==========

function WriteIcon({ classNameName }) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        aria-label="Write"
      >
        <path
          d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
          fill="currentColor"
        />
        <path
          d="m17.5 4.5-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2 2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2 2 2"
          stroke="currentColor"
        />
      </svg>
    </div>
  );
}

function WriteIconFill({ classNameName }) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        aria-label="Write"
      >
        <path
          d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
          fill="currentColor"
        />
        <path
          d="m17.5 4.5-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2 2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2 2 2"
          stroke="currentColor"
        />
      </svg>
    </div>
  );
}

// ============ SAVE ICON ===========

function SaveIcon({ classNameName }) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        className="pi"
      >
        <path
          d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z"
          fill="#000"
        />
      </svg>
    </div>
  );
}

function SaveIconFill({ classNameName }) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        className="qa"
      >
        <path
          d="M7.5 3.75a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-14a2 2 0 0 0-2-2h-9z"
          fill="#000"
        />
      </svg>
    </div>
  );
}

// PLAY OFF

function PlayOffIcon({ classNameName }) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        className="afn afo afp afq"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          className="afn afo afp afq"
        >
          <path
            d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM6.77 10.46a.62.62 0 1 1-1.23 0V5.54a.62.62 0 0 1 1.23 0v4.92zm3.7 0a.62.62 0 1 1-1.24 0V5.54a.62.62 0 0 1 1.23 0v4.92z"
            fill="#292929"
          />
        </svg>
      </svg>
    </div>
  );
}

// PLAY ON

function PlayOnIcon({ className }) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        class="afn afo afp afq"
      >
        <path
          d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm2.8 8.51l-3.69 2.46a.62.62 0 0 1-.96-.5V5.53a.62.62 0 0 1 .96-.51l3.7 2.46a.62.62 0 0 1 0 1.02z"
          fill="#292929"
        ></path>
      </svg>
    </div>
  );
}

// ============ SOCIAL MEDIA ICONS =============

// Twitter
function TwitterIcon({ className }) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          d="M20 5.34c-.67.41-1.4.7-2.18.87a3.45 3.45 0 0 0-5.02-.1 3.49 3.49 0 0 0-1.02 2.47c0 .28.03.54.07.8a9.91 9.91 0 0 1-7.17-3.66 3.9 3.9 0 0 0-.5 1.74 3.6 3.6 0 0 0 1.56 2.92 3.36 3.36 0 0 1-1.55-.44V10c0 1.67 1.2 3.08 2.8 3.42-.3.06-.6.1-.94.12l-.62-.06a3.5 3.5 0 0 0 3.24 2.43 7.34 7.34 0 0 1-4.36 1.49l-.81-.05a9.96 9.96 0 0 0 5.36 1.56c6.4 0 9.91-5.32 9.9-9.9v-.5c.69-.49 1.28-1.1 1.74-1.81-.63.3-1.3.48-2 .56A3.33 3.33 0 0 0 20 5.33"
          fill="#A8A8A8"
        />
      </svg>
    </div>
  );
}

// Facebook
function FacebookIcon({ className }) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          d="M19.75 12.04c0-4.3-3.47-7.79-7.75-7.79a7.77 7.77 0 0 0-5.9 12.84 7.77 7.77 0 0 0 4.69 2.63v-5.49h-1.9v-2.2h1.9v-1.62c0-1.88 1.14-2.9 2.8-2.9.8 0 1.49.06 1.69.08v1.97h-1.15c-.91 0-1.1.43-1.1 1.07v1.4h2.17l-.28 2.2h-1.88v5.52a7.77 7.77 0 0 0 6.7-7.71"
          fill="#A8A8A8"
        ></path>
      </svg>
    </div>
  );
}

// Linked In
function LinkedInIcon({ className }) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          d="M19.75 5.39v13.22a1.14 1.14 0 0 1-1.14 1.14H5.39a1.14 1.14 0 0 1-1.14-1.14V5.39a1.14 1.14 0 0 1 1.14-1.14h13.22a1.14 1.14 0 0 1 1.14 1.14zM8.81 10.18H6.53v7.3H8.8v-7.3zM9 7.67a1.31 1.31 0 0 0-1.3-1.32h-.04a1.32 1.32 0 0 0 0 2.64A1.31 1.31 0 0 0 9 7.71v-.04zm8.46 5.37c0-2.2-1.4-3.05-2.78-3.05a2.6 2.6 0 0 0-2.3 1.18h-.07v-1h-2.14v7.3h2.28V13.6a1.51 1.51 0 0 1 1.36-1.63h.09c.72 0 1.26.45 1.26 1.6v3.91h2.28l.02-4.43z"
          fill="#A8A8A8"
        ></path>
      </svg>
    </div>
  );
}

// ================================

// Link Icon
function LinkIcon({ className }) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.57 14.67c0-.57.13-1.11.38-1.6l.02-.02v-.02l.02-.02c0-.02 0-.02.02-.02.12-.26.3-.52.57-.8L7.78 9v-.02l.01-.02c.44-.41.91-.7 1.44-.85a4.87 4.87 0 0 0-1.19 2.36A5.04 5.04 0 0 0 8 11.6L6.04 13.6c-.19.19-.32.4-.38.65a2 2 0 0 0 0 .9c.08.2.2.4.38.57l1.29 1.31c.27.28.62.42 1.03.42.42 0 .78-.14 1.06-.42l1.23-1.25.79-.78 1.15-1.16c.08-.09.19-.22.28-.4.1-.2.15-.42.15-.67 0-.16-.02-.3-.06-.45l-.02-.02v-.02l-.07-.14s0-.03-.04-.06l-.06-.13-.02-.02c0-.02 0-.03-.02-.05a.6.6 0 0 0-.14-.16l-.48-.5c0-.04.02-.1.04-.15l.06-.12 1.17-1.14.09-.09.56.57c.02.04.08.1.16.18l.05.04.03.06.04.05.03.04.04.06.1.14.02.02c0 .02.01.03.03.04l.1.2v.02c.1.16.2.38.3.68a1 1 0 0 1 .04.25 3.2 3.2 0 0 1 .02 1.33 3.49 3.49 0 0 1-.95 1.87l-.66.67-.97.97-1.56 1.57a3.4 3.4 0 0 1-2.47 1.02c-.97 0-1.8-.34-2.49-1.03l-1.3-1.3a3.55 3.55 0 0 1-1-2.51v-.01h-.02v.02zm5.39-3.43c0-.19.02-.4.07-.63.13-.74.44-1.37.95-1.87l.66-.67.97-.98 1.56-1.56c.68-.69 1.5-1.03 2.47-1.03.97 0 1.8.34 2.48 1.02l1.3 1.32a3.48 3.48 0 0 1 1 2.48c0 .58-.11 1.11-.37 1.6l-.02.02v.02l-.02.04c-.14.27-.35.54-.6.8L16.23 15l-.01.02-.01.02c-.44.42-.92.7-1.43.83a4.55 4.55 0 0 0 1.23-3.52L18 10.38c.18-.21.3-.42.35-.65a2.03 2.03 0 0 0-.01-.9 1.96 1.96 0 0 0-.36-.58l-1.3-1.3a1.49 1.49 0 0 0-1.06-.42c-.42 0-.77.14-1.06.4l-1.2 1.27-.8.8-1.16 1.15c-.08.08-.18.21-.29.4a1.66 1.66 0 0 0-.08 1.12l.02.03v.02l.06.14s.01.03.05.06l.06.13.02.02.01.02.01.02c.05.08.1.13.14.16l.47.5c0 .04-.02.09-.04.15l-.06.12-1.15 1.15-.1.08-.56-.56a2.3 2.3 0 0 0-.18-.19c-.02-.01-.02-.03-.02-.04l-.02-.02a.37.37 0 0 1-.1-.12c-.03-.03-.05-.04-.05-.06l-.1-.15-.02-.02-.02-.04-.08-.17v-.02a5.1 5.1 0 0 1-.28-.69 1.03 1.03 0 0 1-.04-.26c-.06-.23-.1-.46-.1-.7v.01z"
          fill="#A8A8A8"
        ></path>
      </svg>
    </div>
  );
}

// Three dot icon

function ThreeDotIcon({ className }) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z"
          fill="#000"
        ></path>
      </svg>
    </div>
  );
}

//  Clapping icon

function ClapIcon({ className }) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
        ></path>
      </svg>
    </div>
  );
}

//  Chat bubble icon

function ChatBubbleIcon({ className }) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        aria-label="responses"
        class=""
      >
        <path d="M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z"></path>
      </svg>
    </div>
  );
}

//  Search icon

function SearchIcon({ className }) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="rgba(8, 8, 8, 1)"
      >
        <path d="m20.07 18.93-4.16-4.15a6 6 0 1 0-.88.88l4.15 4.16a.62.62 0 1 0 .89-.89zM6.5 11a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0z" />
      </svg>
    </div>
  );
}

//  Mail icon

function MailIcon({ className }) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        class="uv oq or"
      >
        <rect x="26.25" y="9.25" width="0.5" height="6.5" rx="0.25"></rect>
        <rect
          x="29.75"
          y="12.25"
          width="0.5"
          height="6.5"
          rx="0.25"
          transform="rotate(90 29.75 12.25)"
        ></rect>
        <path d="M19.5 12.5h-7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-5"></path>
        <path d="M11.5 14.5L19 20l4-3"></path>
      </svg>
    </div>
  );
}

// Share icon

function ShareIcon({ className }) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.22 4.93a.42.42 0 0 1-.12.13h.01a.45.45 0 0 1-.29.08.52.52 0 0 1-.3-.13L12.5 3v7.07a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V3.02l-2 2a.45.45 0 0 1-.57.04h-.02a.4.4 0 0 1-.16-.3.4.4 0 0 1 .1-.32l2.8-2.8a.5.5 0 0 1 .7 0l2.8 2.8a.42.42 0 0 1 .07.5zm-.1.14zm.88 2h1.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2H8a.5.5 0 0 1 .35.14c.1.1.15.22.15.35a.5.5 0 0 1-.15.35.5.5 0 0 1-.35.15H6.4c-.5 0-.9.4-.9.9v10.2a.9.9 0 0 0 .9.9h11.2c.5 0 .9-.4.9-.9V8.96c0-.5-.4-.9-.9-.9H16a.5.5 0 0 1 0-1z"
          fill="#000"
        />
      </svg>
    </div>
  );
}

// Add icon

function AddIcon({ className }) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="19"
        class="df aeq nr"
      >
        <path d="M9 9H3v1h6v6h1v-6h6V9h-6V3H9v6z" fillRule="evenodd" />
      </svg>
    </div>
  );
}

// left arrow icon

function LeftArrowIcon({ className }) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 19 19"
        aria-hidden="true"
      >
        <path
          d="M11.47 13.97 6.99 9.48 11.47 5l.55.5-3.99 3.98 4 4z"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
}

// right arrow icon

function RightArrowIcon({ className }) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26px"
        height="26px"
        viewBox="0 0 19 19"
        aria-hidden="true"
        style={{ transform: `rotate(180deg)` }}
      >
        <path
          d="M11.47 13.97L6.99 9.48 11.47 5l.55.5-3.99 3.98 4 4z"
          fillRule="evenodd"
        ></path>
      </svg>
    </div>
  );
}

// down arrow icon

function DownArrowIcon() {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        class="kz"
      >
        <path
          d="M4 7.33L10.03 14l.5.55.5-.55 5.96-6.6-.98-.9-5.98 6.6h1L4.98 6.45z"
          fill-rule="evenodd"
        ></path>
      </svg>
    </div>
  );
}

// up arrow icon

function UpArrowIcon({ className }) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="arrow-left-19px_svg__svgIcon-use"
        width="26px"
        height="26px"
        viewBox="0 0 19 19"
        aria-hidden="true"
        style={{ transform: `rotate(360deg)` }}
      >
        <path
          d="M11.47 13.97L6.99 9.48 11.47 5l.55.5-3.99 3.98 4 4z"
          fillRule="evenodd"
        ></path>
      </svg>
    </div>
  );
}

// cross

function CancelIcon({ className }) {
  return (
    <div style={style}>
      <svg xmlns="http://www.w3.org/2000/svg" class="df" width="29" height="29">
        <path
          d="m20.13 8.11-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
}

// show less

function RemoveIcon({ className }) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM8.25 12h7.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </div>
  );
}

// ============ lock ============
function LockIcon({}) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="11"
        viewBox="0 0 8 11"
        fill="none"
        class="jq jr"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.18 2.6a1.82 1.82 0 0 1 3.64 0v2.07H2.18V2.6zm4.37 2.07V2.6C6.55 1.17 5.4 0 4 0a2.58 2.58 0 0 0-2.55 2.6v2.07c-.39 0-.75.17-1.03.46-.27.3-.42.7-.42 1.12v3.17a1.7 1.7 0 0 0 .42 1.12c.14.14.3.26.47.34.18.08.37.12.56.12h5.1c.39 0 .75-.17 1.03-.47.27-.3.42-.7.42-1.11V6.25a1.7 1.7 0 0 0-.42-1.12c-.14-.14-.3-.26-.47-.34a1.35 1.35 0 0 0-.56-.12z"
          fill="#757575"
        ></path>
      </svg>
    </div>
  );
}

// ============ STAR ICON ==============

function StarIcon({}) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M12.4 12.77l-1.81 4.99a.63.63 0 0 1-1.18 0l-1.8-4.99a.63.63 0 0 0-.38-.37l-4.99-1.81a.62.62 0 0 1 0-1.18l4.99-1.8a.63.63 0 0 0 .37-.38l1.81-4.99a.63.63 0 0 1 1.18 0l1.8 4.99a.63.63 0 0 0 .38.37l4.99 1.81a.63.63 0 0 1 0 1.18l-4.99 1.8a.63.63 0 0 0-.37.38z"
          fill="#FFC017"
        ></path>
      </svg>
    </div>
  );
}

// =========== Stats Icon =============

function StatsIcon({}) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M2.75 19h4.5c.14 0 .25-.11.25-.25v-6.5a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v6.5c0 .14.11.25.25.25zM9.75 19h4.5c.14 0 .25-.11.25-.25V8.25a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v10.5c0 .14.11.25.25.25zM16.75 19h4.5c.14 0 .25-.11.25-.25V4.25a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v14.5c0 .14.11.25.25.25z"
          stroke="currentColor"
        ></path>
      </svg>
    </div>
  );
}

// =========== Medium Named Icon =============

function MediumNamedIcon({}) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="svgIcon-use"
        height="25"
        viewBox="0 0 3940 610"
      >
        <path d="M594.79 308.2c0 163.76-131.85 296.52-294.5 296.52S5.8 472 5.8 308.2 137.65 11.69 300.29 11.69s294.5 132.75 294.5 296.51"></path>
        <path d="M917.86 308.2c0 154.16-65.93 279.12-147.25 279.12s-147.25-125-147.25-279.12S689.29 29.08 770.61 29.08s147.25 125 147.25 279.12"></path>
        <path d="M1050 308.2c0 138.12-23.19 250.08-51.79 250.08s-51.79-112-51.79-250.08 23.19-250.08 51.8-250.08S1050 170.09 1050 308.2"></path>
        <path d="M1862.77 37.4l.82-.18v-6.35h-167.48l-155.51 365.5-155.51-365.5h-180.48v6.35l.81.18c30.57 6.9 46.09 17.19 46.09 54.3v434.45c0 37.11-15.58 47.4-46.15 54.3l-.81.18V587H1327v-6.35l-.81-.18c-30.57-6.9-46.09-17.19-46.09-54.3V116.9L1479.87 587h11.33l205.59-483.21V536.9c-2.62 29.31-18 38.36-45.68 44.61l-.82.19v6.3h213.3v-6.3l-.82-.19c-27.71-6.25-43.46-15.3-46.08-44.61l-.14-445.2h.14c0-37.11 15.52-47.4 46.08-54.3m97.43 287.8c3.49-78.06 31.52-134.4 78.56-135.37 14.51.24 26.68 5 36.14 14.16 20.1 19.51 29.55 60.28 28.09 121.21zm-2.11 22h250v-1.05c-.71-59.69-18-106.12-51.34-138-28.82-27.55-71.49-42.71-116.31-42.71h-1c-23.26 0-51.79 5.64-72.09 15.86-23.11 10.7-43.49 26.7-60.45 47.7-27.3 33.83-43.84 79.55-47.86 130.93-.13 1.54-.24 3.08-.35 4.62s-.18 2.92-.25 4.39c-.14 2.75-.25 5.51-.31 8.28-.1 4.44-.13 8.91-.05 13.41C1860.79 507 1923.65 600 2035.3 600c98 0 155.07-71.64 169.3-167.8l-7.19-2.53c-25 51.68-69.9 83-121 79.18-69.76-5.22-123.2-75.95-118.35-161.63m532.69 157.68c-8.2 19.45-25.31 30.15-48.24 30.15s-43.89-15.74-58.78-44.34c-16-30.7-24.42-74.1-24.42-125.51 0-107 33.28-176.21 84.79-176.21 21.57 0 38.55 10.7 46.65 29.37zm165.84 76.28c-30.57-7.23-46.09-18-46.09-57V5.28L2424.77 60v6.7l1.14-.09c25.62-2.07 43 1.47 53.09 10.79 7.9 7.3 11.75 18.5 11.75 34.26v71.14c-18.31-11.69-40.09-17.38-66.52-17.38-53.6 0-102.59 22.57-137.92 63.56-36.83 42.72-56.3 101.1-56.3 168.81C2230 518.72 2289.53 600 2378.13 600c51.83 0 93.53-28.4 112.62-76.3V588h166.65v-6.66zm159.29-505.33c0-37.76-28.47-66.24-66.24-66.24-37.59 0-67 29.1-67 66.24s29.44 66.24 67 66.24c37.77 0 66.24-28.48 66.24-66.24m43.84 505.33c-30.57-7.23-46.09-18-46.09-57h-.13V166.65l-166.66 47.85v6.5l1 .09c36.06 3.21 45.93 15.63 45.93 57.77V588h166.8v-6.66zm427.05 0c-30.57-7.23-46.09-18-46.09-57V166.65L3082 212.92v6.52l.94.1c29.48 3.1 38 16.23 38 58.56v226c-9.83 19.45-28.27 31-50.61 31.78-36.23 0-56.18-24.47-56.18-68.9V166.66l-166.66 47.85V221l1 .09c36.06 3.2 45.94 15.62 45.94 57.77v191.27a214.48 214.48 0 003.47 39.82l3 13.05c14.11 50.56 51.08 77 109 77 49.06 0 92.06-30.37 111-77.89v66h166.66v-6.66zM3934.2 588v-6.67l-.81-.19c-33.17-7.65-46.09-22.07-46.09-51.43v-243.2c0-75.83-42.59-121.09-113.93-121.09-52 0-95.85 30.05-112.73 76.86-13.41-49.6-52-76.86-109.06-76.86-50.12 0-89.4 26.45-106.25 71.13v-69.87l-166.66 45.89v6.54l1 .09c35.63 3.16 45.93 15.94 45.93 57V588h155.5v-6.66l-.82-.2c-26.46-6.22-35-17.56-35-46.66V255.72c7-16.35 21.11-35.72 49-35.72 34.64 0 52.2 24 52.2 71.28V588h155.54v-6.66l-.82-.2c-26.46-6.22-35-17.56-35-46.66v-248a160.45 160.45 0 00-2.2-27.68c7.42-17.77 22.34-38.8 51.37-38.8 35.13 0 52.2 23.31 52.2 71.28V588z"></path>
      </svg>
    </div>
  );
}

// medium logo
function MediumLogo({}) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="svgIcon-use"
        height="25"
        viewBox="0 0 1043.63 592.71"
      >
        <g data-name="Layer 2">
          <g data-name="Layer 1">
            <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36"></path>
            <path d="M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279"></path>
            <path d="M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path>
          </g>
        </g>
      </svg>
    </div>
  );
}

// medium logo
function MediumLogo2({}) {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1043.63 592.71"
        height="23px"
        class="dc bk"
        fill="#292929"
      >
        <g data-name="Layer 2">
          <g data-name="Layer 1">
            <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path>
          </g>
        </g>
      </svg>
    </div>
  );
}

// Tag icon
function TagIcon({}) {
  return (
    <div style={style}>
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21">
        <path
          d="M4.66 8.72L3.43 9.95a1.75 1.75 0 0 0 0 2.48l5.14 5.13c.7.7 1.8.69 2.48 0l1.23-1.22 5.35-5.35a2 2 0 0 0 .51-1.36l-.32-4.29a2.42 2.42 0 0 0-2.15-2.14l-4.3-.33c-.43-.03-1.05.2-1.36.51l-.79.8-2.27 2.28-2.28 2.27zm9.83-.98a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z"
          fill-rule="evenodd"
        ></path>
      </svg>
    </div>
  );
}

// ========= bold text icon
function BoldTextIcon({}) {
  return (
    <div style={style}>
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21">
        <path
          d="M10.308 17.993h-5.92l.11-.894.783-.12c.56-.11.79-.224.79-.448V5.37c0-.225-.113-.336-.902-.448H4.5l-.114-.894h6.255c4.02 0 5.58 1.23 5.58 3.13 0 1.896-1.78 3.125-3.79 3.463v.11c2.69.34 4.25 1.56 4.25 3.57 0 2.35-2.01 3.69-6.37 3.69l.02.01h-.02zm-.335-12.96H8.967V10.5h1.23c1.788 0 2.79-1.23 2.79-2.683 0-1.685-1.004-2.803-3.006-2.803v.02zm-.223 6.36h-.783v5.588l1.225.23h.22c1.67 0 3.01-1.004 3.01-2.792 0-2.122-1.566-3.016-3.69-3.016h.018z"
          fill-rule="evenodd"
        ></path>
      </svg>
    </div>
  );
}

// ========= Italics text icon
function ItalicTextIcon({}) {
  return (
    <div style={style}>
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21">
        <path
          d="M9.847 18.04c-.533 0-2.027-.64-1.92-.853l2.027-7.68-.64-.214-1.387 1.494-.427-.427c.534-1.173 1.707-2.667 2.774-2.667.533 0 2.24.534 2.133.854l-2.133 7.786.533.214 1.6-1.067.427.427c-.64 1.066-1.92 2.133-2.987 2.133zm2.347-11.733c-.96 0-1.387-.64-1.387-1.387 0-1.067.747-1.92 1.493-1.92.854 0 1.387.64 1.387 1.493-.107 1.067-.747 1.814-1.493 1.814z"
          fill-rule="evenodd"
        ></path>
      </svg>
    </div>
  );
}

// ========= Link Text icon
function LinkTextIcon({}) {
  return (
    <div style={style}>
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21">
        <path
          d="M2.2 13.17c0-.575.125-1.11.375-1.605l.02-.018v-.02c.014 0 .02-.008.02-.02 0-.014 0-.02.02-.02.122-.256.31-.52.576-.805l3.19-3.18c0-.008 0-.015.01-.02.01-.006.01-.013.01-.02.44-.413.91-.7 1.44-.853-.63.71-1.03 1.5-1.19 2.36-.04.24-.06.52-.06.81 0 .14.01.24.02.33L4.67 12.1c-.19.19-.316.407-.376.653a1.33 1.33 0 00-.057.415c0 .155.02.314.06.477.075.21.2.403.376.58l1.286 1.31c.27.276.62.416 1.03.416.42 0 .78-.14 1.06-.42l1.23-1.25.79-.78 1.15-1.16c.08-.09.19-.22.28-.4.103-.2.15-.42.15-.67 0-.16-.02-.31-.056-.45l-.02-.02v-.02l-.07-.14c0-.01-.013-.03-.04-.06l-.06-.13-.02-.02c0-.02-.01-.03-.02-.05a.592.592 0 00-.143-.16l-.48-.5c0-.042.015-.1.04-.15l.06-.12 1.17-1.14.087-.09.56.57c.023.04.08.1.16.18l.05.04c.006.018.02.036.035.06l.04.054c.01.01.02.025.03.04.03.023.04.046.04.058.04.04.08.09.1.14l.02.02c0 .018.01.03.024.04l.105.197v.02c.098.157.19.384.297.68a1 1 0 01.04.255c.06.21.08.443.08.7 0 .22-.02.43-.06.63-.12.71-.44 1.334-.95 1.865l-.66.67-.97.972-1.554 1.57C8.806 17.654 7.98 18 7.01 18s-1.8-.34-2.487-1.026l-1.296-1.308a3.545 3.545 0 01-.913-1.627 4.541 4.541 0 01-.102-.88v-.01l-.012.01zm5.385-3.433c0-.183.023-.393.07-.63.13-.737.448-1.362.956-1.87l.66-.662.97-.983 1.56-1.56C12.48 3.34 13.3 3 14.27 3c.97 0 1.8.34 2.483 1.022l1.29 1.314c.44.438.744.976.913 1.618.067.32.102.614.102.87 0 .577-.123 1.11-.375 1.605l-.02.01v.02l-.02.04c-.148.27-.35.54-.6.81l-3.187 3.19c0 .01 0 .01-.01.02-.01 0-.01.01-.01.02-.434.42-.916.7-1.427.83.63-.67 1.03-1.46 1.19-2.36.04-.26.06-.53.06-.81 0-.14-.01-.26-.02-.35l1.99-1.97c.18-.21.3-.42.35-.65.04-.12.05-.26.05-.42 0-.16-.02-.31-.06-.48-.07-.19-.19-.38-.36-.58l-1.3-1.3a1.488 1.488 0 00-1.06-.42c-.42 0-.77.14-1.06.41L11.98 6.7l-.79.793-1.157 1.16c-.088.075-.186.21-.294.4-.09.233-.14.46-.14.67 0 .16.02.31.06.452l.02.02v.023l.06.144c0 .006.01.026.05.06l.06.125.02.02c0 .01 0 .013.01.02 0 .005.01.01.01.02.05.08.1.134.14.16l.47.5c0 .04-.02.093-.04.15l-.06.12-1.15 1.15-.1.08-.56-.56a2.31 2.31 0 00-.18-.187c-.02-.01-.02-.03-.02-.04l-.02-.02a.375.375 0 01-.1-.122c-.03-.024-.05-.043-.05-.06l-.1-.15-.02-.02-.02-.04L8 11.4v-.02a5.095 5.095 0 01-.283-.69 1.035 1.035 0 01-.04-.257 2.619 2.619 0 01-.093-.7v.007z"
          fill-rule="evenodd"
        ></path>
      </svg>
    </div>
  );
}

// ========= Bigger Text icon
function BiggerTextIcon({}) {
  return (
    <div style={style}>
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21">
        <path
          d="M3 2v4.747h1.656l.383-2.568.384-.311h3.88V15.82l-.408.38-1.56.12V18h7.174v-1.68l-1.56-.12-.407-.38V3.868h3.879l.36.311.407 2.568h1.656V2z"
          fill-rule="evenodd"
        ></path>
      </svg>
    </div>
  );
}

// ========= Smaller Text icon
function SmallerTextIcon({}) {
  return (
    <div style={style}>
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21">
        <path
          d="M4 5.5v4.74h1.657l.384-2.569.384-.312h2.733v8.461l-.41.38-1.91.12V18h7.179v-1.68l-1.912-.12-.405-.38V7.359h2.729l.36.312.408 2.57h1.657V5.5z"
          fill-rule="evenodd"
        ></path>
      </svg>
    </div>
  );
}

// ========= blockquote Text icon
function BlockquoteTextIcon({}) {
  return (
    <div style={style}>
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21">
        <path d="M15.48 18.024c-2.603 0-4.45-2.172-4.45-4.778 0-3.263 2.498-6.3 6.517-8.803l1.297 1.303c-2.497 1.63-3.91 3.042-3.91 5.214 0 2.824 3.91 3.582 3.91 3.91.11 1.41-1.194 3.15-3.366 3.15h.004v.004z"></path>
        <path d="M6.578 18.024c-2.606 0-4.453-2.172-4.453-4.778 0-3.263 2.497-6.3 6.515-8.803l1.303 1.303c-2.606 1.63-3.907 3.042-3.907 5.106 0 2.823 3.91 3.58 3.91 3.91 0 1.518-1.304 3.257-3.368 3.257z"></path>
      </svg>
    </div>
  );
}

// ========= Private Text icon
function PrivateNoteIcon({}) {
  return (
    <div style={style}>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25">
        <g fill-rule="evenodd">
          <path d="M17.662 4.552H7.346A4.36 4.36 0 003 8.898v5.685c0 2.168 1.614 3.962 3.697 4.28v2.77c0 .303.35.476.59.29l3.904-2.994h6.48c2.39 0 4.35-1.96 4.35-4.35V8.9c0-2.39-1.95-4.346-4.34-4.346zM16 14.31a.99.99 0 01-1.003.99h-4.994C9.45 15.3 9 14.85 9 14.31v-3.02a.99.99 0 011-.99v-.782a2.5 2.5 0 012.5-2.51c1.38 0 2.5 1.13 2.5 2.51v.782c.552.002 1 .452 1 .99v3.02z"></path>
          <path d="M14 9.81c0-.832-.674-1.68-1.5-1.68-.833 0-1.5.84-1.5 1.68v.49h3v-.49z"></path>
        </g>
      </svg>
    </div>
  );
}

export {
  HomeIcon,
  HomeIconFill,
  HomeCurvedIcon,
  HomeCurvedFillIcon,
  BellIcon,
  BellIconFill,
  BookmarkIcon,
  BookmarkIconFill,
  BookmarkCurvedIcon,
  StoriesIcon,
  StoriesIconFill,
  WriteIcon,
  SaveIcon,
  SaveIconFill,
  PlayOffIcon,
  PlayOnIcon,
  TwitterIcon,
  FacebookIcon,
  LinkedInIcon,
  LinkIcon,
  ThreeDotIcon,
  SearchIcon,
  SearchCurvedIcon,
  SearchCurvedFillIcon,
  ClapIcon,
  ChatBubbleIcon,
  MailIcon,
  ShareIcon,
  AddIcon,
  LeftArrowIcon,
  RightArrowIcon,
  DownArrowIcon,
  UpArrowIcon,
  CancelIcon,
  RemoveIcon,
  LockIcon,
  StarIcon,
  StatsIcon,
  MediumNamedIcon,
  MediumLogo,
  MediumLogo2,
  Bell2Icon,
  TagIcon,
  BoldTextIcon,
  ItalicTextIcon,
  LinkTextIcon,
  BiggerTextIcon,
  SmallerTextIcon,
  BlockquoteTextIcon,
  PrivateNoteIcon
};
