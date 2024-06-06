import { assets } from "../../assets/Image/assets/assets";
import './AppDownloader.css';
const AppDownloader=()=>{
    return <>
    <div className="app-download-content" id="app-download">
        <p>For Better Experience Download<br/> Food App</p>
        <div className="app-download-platforms">
            <img  src={assets.play_store} alt=""/>
            <img  src={assets.app_store} alt=""/>
        </div>
    </div>
    </>

}
export default AppDownloader;