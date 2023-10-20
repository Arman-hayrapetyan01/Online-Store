import React from "react";
import ContentLoader from "react-content-loader";
const Loader = () => (
  <div className="reltive">
    <ContentLoader
      speed={1.8}
      className=" absolute border border-black"
      viewBox="0 0 400 160"
      backgroundColor="#000000"
      foregroundColor="#ecebeb"
    >
      <rect x="20" y="11" rx="2" ry="2" width="100" height="150" />
      <rect x="150" y="11" rx="2" ry="2" width="100" height="150" />
      <rect x="280" y="11" rx="2" ry="2" width="100" height="150" />
    </ContentLoader>
    <ContentLoader
      rtl
      speed={0.8}
      className=" absolute border border-black"
      viewBox="0 0 400 160"
      backgroundColor="#434343"
      foregroundColor="#ffffff91"
    >
      <rect x="30" y="15" rx="2" ry="2" width="80" height="80" />
      <rect x="160" y="15" rx="2" ry="2" width="80" height="80" />
      <rect x="290" y="15" rx="2" ry="2" width="80" height="80" />

      <rect x="25" y="105" rx="2" ry="2" width="90" height="5" />
      <rect x="25" y="125" rx="2" ry="2" width="90" height="5" />
      <rect x="25" y="145" rx="2" ry="2" width="90" height="5" />

      <rect x="155" y="105" rx="2" ry="2" width="90" height="5" />
      <rect x="155" y="125" rx="2" ry="2" width="90" height="5" />
      <rect x="155" y="145" rx="2" ry="2" width="90" height="5" />

      <rect x="285" y="105" rx="2" ry="2" width="90" height="5" />
      <rect x="285" y="125" rx="2" ry="2" width="90" height="5" />
      <rect x="285" y="145" rx="2" ry="2" width="90" height="5" />
    </ContentLoader>
  </div>
);

export default Loader;
