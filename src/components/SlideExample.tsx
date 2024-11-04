import React from 'react';
import Layout from './Layout';
import TextBlock from './TextBlock';
import ImageBlock from './ImageBlock';

const SlideExample = () => {
    const textContent = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  `;

    return (
        <div className="bg-gray-900 text-white p-8">
            <Layout cols="grid-cols-2" gap="gap-8">
                {/* Left side: Text Content */}
                <div>
                    <TextBlock
                        title="The Execution"
                        content={textContent}
                        titleSize="text-3xl"
                        contentSize="text-lg"
                    />
                    <TextBlock
                        content={textContent}
                        contentSize="text-lg"
                    />

                    <TextBlock
                        content={textContent}
                        contentSize="text-lg"
                    />
                </div>

                {/* Right side: Images */}
                <div className="space-y-4">
                    <ImageBlock src="/assets/images/AFI_Plane.jpg" alt="Content Distribution Strategy" />
                    <ImageBlock src="/assets/images/AFI Ad bundle.png" alt="Phase Planning" />
                </div>
            </Layout>
        </div>
    );
};

export default SlideExample;
