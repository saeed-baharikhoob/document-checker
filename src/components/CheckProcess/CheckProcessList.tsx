import { CheckProcessItem } from "../../utils/types";
import Step from "./Step";
import { motion } from "framer-motion";

interface CheckProcessListProps {
    items: CheckProcessItem[];
}

const CheckProcessList = ({ items }: CheckProcessListProps) => {
    return (
        <div className="w-full px-10 bg-custom-box rounded-xl">
            <div className="space-y-8 relative">
                {items.map((item, index) => (
                    <motion.div
                        key={'check-process-' + item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, delay: index * 0.3 }}
                    >
                        <Step title={item.title} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CheckProcessList;
