import * as React from 'react';

function Content() {
  return (
     <body>
        <div className="contentWrapper">
            <details>
                <summary className="detailsHeading">
                    <span>Название автобуса</span>
                    <img src="../img/expand.svg" className="expand"/>
                </summary>
                <div className="detailsInfo">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu odio eget lectus tincidunt maximus at a dolor. Etiam gravida, tellus sit amet scelerisque aliquet, mauris lacus condimentum dolor, sed ultrices ipsum diam nec nulla. Sed tincidunt faucibus elit, eget lobortis felis facilisis sit amet. Suspendisse blandit vestibulum scelerisque. Fusce feugiat augue urna, a convallis arcu efficitur quis. Nunc non pulvinar augue, ut lobortis dui. Morbi imperdiet magna nibh, non accumsan magna tincidunt lobortis. Nunc dignissim dolor vitae neque tincidunt iaculis.
                </div>
            </details>
            <details>
                <summary className="detailsHeading">
                    <span>Название автобуса</span>
                    <img src="../img/expand.svg" className="expand"/>
                </summary>
                <div className="detailsInfo">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu odio eget lectus tincidunt maximus at a dolor. Etiam gravida, tellus sit amet scelerisque aliquet, mauris lacus condimentum dolor, sed ultrices ipsum diam nec nulla. Sed tincidunt faucibus elit, eget lobortis felis facilisis sit amet. Suspendisse blandit vestibulum scelerisque. Fusce feugiat augue urna, a convallis arcu efficitur quis. Nunc non pulvinar augue, ut lobortis dui. Morbi imperdiet magna nibh, non accumsan magna tincidunt lobortis. Nunc dignissim dolor vitae neque tincidunt iaculis.
                </div>
            </details>
        </div>

     </body>
  );
}

export default Content;