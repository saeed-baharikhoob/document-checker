import { useState } from 'react';
import StepperText from "./Types/Text";
import { isString } from "../../utils/functions";
import StepperUpload from "./Types/Upload";
import Step from "./Types/Step";
import Complete from "./Types/Complete";
import { Steps } from "../../utils/types";
import { motion } from "framer-motion";

type StepProps = {
    step: number;
    currentStep: number;
    title: string;
    type: string | 'titleOnly' | 'text' | 'upload' | 'complete';
    value: string | object;
    handleNext: any;
    handlePrevious: any;
};

const Item = ({ step, currentStep, title, type, value, handleNext, handlePrevious }: StepProps) => {
    const isActive = step === currentStep;
    const isCompleted = step < currentStep;

    return (
        <motion.div
            className={'flex flex-col space-y-5'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isActive ? 0.7 : 0.3, y: isActive ? 0 : 5 }}
            transition={{ duration: 0.3, delay: step * 0.1 }}
        >
            <Step title={title} step={step} isActive={isActive} isCompleted={isCompleted} />
            {isActive && type !== 'titleOnly' && (
                <div className={'flex items-center justify-start pl-10 py-5 border-l-2 border-selected-item'}>
                    {type === "text" && isString(value) && (
                        <StepperText text={value} handlePrevious={handlePrevious} handleNext={handleNext} />
                    )}
                    {type === "upload" && isString(value) && (
                        <StepperUpload handlePrevious={handlePrevious} handleNext={handleNext} />
                    )}
                    {type === "complete" && isString(value) && (
                        <Complete handleNext={handleNext} />
                    )}
                </div>
            )}
        </motion.div>
    );
};

interface StepperProps {
    steps: Steps[];
    showCheckProcess?: () => void;
}

const Stepper = ({ steps, showCheckProcess }: StepperProps) => {
    const [currentStep, setCurrentStep] = useState(2);

    const handleNext = () => {
        setCurrentStep((prev) => (prev < steps.length + 1 ? prev + 1 : prev));
        if (steps.length + 1 === currentStep) {
            if (showCheckProcess) {
                showCheckProcess();
            }
        }
    };

    const handlePrevious = () => {
        setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev));
    };

    return (
        <div className="w-fit px-10 mt-10">
            <div className="space-y-8 relative">
                {steps.map((step) => (
                    <Item
                        key={step.step}
                        step={step.step}
                        currentStep={currentStep}
                        title={step.title}
                        value={step.value}
                        type={step.type}
                        handleNext={handleNext}
                        handlePrevious={handlePrevious}
                    />
                ))}
                <Item
                    step={steps.length + 1}
                    currentStep={currentStep}
                    title={"complete"}
                    value={""}
                    type={"complete"}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                />
            </div>
        </div>
    );
};

export default Stepper;
