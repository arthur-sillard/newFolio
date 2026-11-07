import BentoLayout from "../Basics/Bento/BentoLayout"
import BentoBox from "../Basics/Bento/BentoBox"

export default function AboutBento() {
    return (
        <>
            <BentoLayout cols={1} colsMd={5}>
                <BentoBox span={1} spanMd={5} >
                    <p className="font-regular text-text-light dark:text-text-dark">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, corporis omnis fugit dolorum rem deleniti. Corrupti, similique quia deleniti voluptates quas, voluptas beatae dolorum possimus numquam perferendis repellendus laborum quae!
                    </p>
                </BentoBox>
                <BentoBox span={1} spanMd={3}>
                    <p className="font-regular text-text-light dark:text-text-dark">
                        Timeline formation
                    </p>
                </BentoBox>
                <BentoBox span={1} spanMd={2} >
                    <p className="font-regular text-text-light dark:text-text-dark">
                        Timeline experience
                    </p>
                </BentoBox>
            </BentoLayout>
        </>
    )
}