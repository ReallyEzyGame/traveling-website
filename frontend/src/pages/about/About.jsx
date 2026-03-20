import "./About.css";

const labels = ['Home', 'Ask Any', 'Review', 'About Us'];

function AboutUs() {
    return (
        <div className="flex flex-row h-screen w-screen bg-linear-to-br justify-center from-violet-500 to-pink-300" >
            <div className="flex flex-col h-fit w-1/2 min-w-1/2 bg-white justify-self-center self-center rounded-lg p-4">
                <div className="flex flex-row w-1/1 h-fit relative">
                    {/* Logo* */}
                    <div className="flex flex-row absolute left-0 justify-self-start">
                        Team Logo
                    </div>
                    <div className="flex flex-row absolute right-0 gap-4">
                        {
                            labels.map((label) => (
                                <div key={label}>
                                    {
                                        label
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col h-5/6 w-3/4 mt-16 ml-8">
                    <h2 className="">
                        Group of 8
                    </h2>
                    <p>
                        Consciousness is being aware of something internal to one's self or being conscious of states or objects in one's external environment.[1] It has been the topic of extensive explanations, analyses, and debate among philosophers, scientists, and theologians for millennia. There is no consensus on what exactly needs to be studied, or even if consciousness can be considered a scientific concept. In some explanations, it is synonymous with mind, while in others it is considered an aspect of it.

                        In the past, consciousness meant one's "inner life": the world of introspection, private thought, imagination, and volition.[2] Today, it often includes any kind of cognition, experience, feeling, or perception. It may be awareness, awareness of awareness, metacognition, or self-awareness, either continuously changing or not.[3][4] There is also a medical definition that helps, for example, to discern "coma" from other states. The disparate range of research, notions, and speculations raises some curiosity about whether the right questions are being asked.[5]
                    </p>
                </div>
            </div>
        </div>
    );
}


export default AboutUs;