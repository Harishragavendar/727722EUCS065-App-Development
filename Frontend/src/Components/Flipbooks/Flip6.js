import React, { useState, useEffect } from 'react';

const Flip6 = () => {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnc.heyzine.com/release/heyzine.3.css';
    link.onload = () => {
      link.onload = null;
      link.rel = 'stylesheet';
    };
    document.head.appendChild(link);
  }, []);

  return (
    <div
      onTouchStart={() => setHover(!hover)}
      className={`heyzine-flip ${hover ? 'hover' : ''}`}
      style={{ maxWidth: '400px' }}
    >
      <div className="container">
        <div className="front fp-w fp-fh fp-h" style={{ minHeight: '250px', height: '260px', width: '350px' }}>
          <img
            src="https://cdnc.heyzine.com/flip-book/cover/c9a2faa488.jpg"
            className="img-front fp-thumb"
            alt="Front Cover"
          />
          <div className="inner">
            <h5 className="fp-title"></h5>
          </div>
        </div>
        <div className="back fp-w fp-fh fp-h" style={{ minHeight: '250px', height: '260px', width: '350px' }}>
          <img
            src="https://cdnc.heyzine.com/flip-book/cover/c9a2faa488.jpg"
            className="img-back fp-thumb"
            alt="Back Cover"
          />
          <div className="inner">
            <p>
              <span className="fp-subtitle"></span>
              <br />
              <a href="https://heyzine.com/flip-book/c9a2faa488.html" rel="noopener noreferrer" className="fp-link">
                View
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flip6;
