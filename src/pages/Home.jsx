import Veg from "../components/Veg";
import Trending from "../components/Trending";
import {motion} from "framer-motion";

const Home = () => {
  return (
    <motion.div
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}
    >
        <Veg />
        <Trending />
    </motion.div>
  )
}

export default Home