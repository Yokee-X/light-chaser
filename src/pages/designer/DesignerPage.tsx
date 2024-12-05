import URLUtil from "../../utils/URLUtil.ts";
import {SaveType} from "../../designer/DesignerType.ts";
import Designer from "../../designer/Designer.tsx";
import { useEffect } from "react";

export default function DesignerPage() {
    const {saveType, id} = URLUtil.parseUrlParams();

    useEffect(()=>{
        //设置页面关闭提示
        const handleBeforeUnload = (event:BeforeUnloadEvent) => {
            event.preventDefault();
            event.returnValue = ''; // 
            return ''
          };
          window.addEventListener('beforeunload', handleBeforeUnload);
          return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
          };
    },[])
    return <Designer id={id} type={saveType as SaveType}/>
}
