import React from "react";
import "./Widgets.css";
function Widgets() {
  return (
    <div className="widgets" style={{ flex: 0.33 }}>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/CleverProgrammerr/&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        allowTransparency="true"
        frameBorder="0"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        allow="encrypted-media"
      />
    </div>
  );
}

export default Widgets;
