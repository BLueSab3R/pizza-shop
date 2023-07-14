import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={345}
    height={500}
    viewBox="0 0 345 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="127" cy="104" r="74" /> 
    <rect x="33" y="187" rx="0" ry="0" width="181" height="46" /> 
    <rect x="30" y="246" rx="0" ry="0" width="192" height="83" /> 
    <rect x="23" y="335" rx="0" ry="0" width="98" height="47" /> 
    <rect x="131" y="335" rx="0" ry="0" width="107" height="49" />
  </ContentLoader>

)

export default Skeleton;