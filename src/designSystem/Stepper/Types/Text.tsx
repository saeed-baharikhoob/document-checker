import Button from "../../Button.tsx";

interface TextProps{
    text: string;
    handlePrevious :any
    handleNext:any
}
const StepperText = ({text,handlePrevious,handleNext}:TextProps)=>{
    return(
        <div className={'flex flex-col space-y-5'}>
            <span className={'text-sm leading-loose font-medium text-stepper-text-type max-w-sm'}>{text}</span>
            <div className={'flex space-x-5 h-12'}>
                <Button type={'yellow'} onClick={handlePrevious}>
                    Previous
                </Button>
                <Button type={'yellow'} onClick={handleNext}>
                    Next
                </Button>
            </div>
        </div>
    )
}
export default StepperText