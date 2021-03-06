import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/selectors/authSelectors';

import './ChatBot.module.scss';

const Chat = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const [timeoutIndex, setTimeoutIndex] = useState();

  // useEffect(() => {
  //   const callback = () => {
  //     if (!window.Kommunicate) {
  //       return;
  //     }
  //     const visible = window.innerWidth > 768;
  //     var css = `#mck-sidebox-launcher{opacity: 0.5;}
  //            #mck-sidebox-launcher:hover{opacity: 1;}
  //              #mck-sidebox-launcher
  //               {display:${visible ? 'initial' : 'none'};pointer-events:${
  //       visible ? 'initial' : 'none'
  //     }}`;
  //     console.log(css);
  //     window.Kommunicate.customizeWidgetCss(css);
  //   };

  //   window.addEventListener('resize', callback, true);

  //   return () => window.removeEventListener('resize', callback);
  // });

  useEffect(() => {
    timeoutIndex && clearTimeout(timeoutIndex);
    if (isAuthenticated && !window.Kommunicate) {
      setTimeoutIndex(
        setTimeout(() => {
          (function (d, m) {
            var kommunicateSettings = {
              appId: '3073be601a99694b8f670771db9db0eb3',
              popupWidget: true,
              automaticChatOpenOnNavigation: true,
              onInit: function () {
                var css = `#mck-sidebox-launcher{opacity: 0.5;}
             #mck-sidebox-launcher:hover{opacity: 1;}
              `;
                window.Kommunicate.customizeWidgetCss(css);
              },
            };
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
            var h = document.getElementsByTagName('head')[0];
            h.appendChild(s);
            window.kommunicate = m;
            m._globals = kommunicateSettings;
          })(document, window.kommunicate || {});
        }, 3000),
      );
    }

    if (!isAuthenticated && window.Kommunicate) {
      window.Kommunicate.logout();
    }
  }, [isAuthenticated]);

  return <div></div>;
};

export default Chat;
