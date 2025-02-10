import { useState } from "react";
import AppDownloader from "../../Components/AppDownloader/AppDownloader";
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay";
import Header from '../../Components/Header/Header';
import ExploreMenu from "../../Menu/ExploreMenu";
const Home = () => {
    const [category, SetCategory] = useState("All");
    return <>
        <Header/>
        <ExploreMenu category={category} SetCategory={SetCategory} />
        <FoodDisplay category={category} />
        <AppDownloader/>
    </>
}
export default Home;