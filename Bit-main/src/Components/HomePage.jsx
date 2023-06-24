import React from "react";

import './HomePage.css';

import Navbar from './Header/Navbar';
import Dot_Animation from './Dots-Animation/Dot-Animation';
import HeadingTextButton from './Heading-Text-Button/Heading-Text-Button';
import EcoSystemTypes from './Ecosystem/Ecosystem';
import QnA from "./Question-Section/QnA";
import DynamicHeader from "./DynamicComponent/DynamicHeader";

let HeadingTextButtons = [
    ['Ecosystem', 'with ', 'Analytics', '6MM is a Web3 Brand building on Pulsechain.', 'There is NO sacrifice, ONLY AIRDROPS :)', 'Lance App', 'heading-text-button-section htb-1'],
    ['#NFT', '', 'PULSE OG', 'Pulse OG, an exclusive collection of 999 NFTs on Pulsechain, represents the esteemed OG investors of this groundbreaking venture. It unveils a host of utilities and serves as the inaugural product of 6MM, a visionary force introducing a range of upcoming DeFi tools. Within this unified ecosystem, a single token governs, and acquiring the coveted 6MM is achievable by either minting a Pulse OG or holding the Pulse OG NFT during the snapshot.', 'Notably, there is no sacrifice phase, private sale, or team tokens, as the team reserves only the right to mint ten NFTs from this extraordinary collection. Pulse OG stands as a testament to the pioneers who embraced the possibilities of Pulsechain, promising a future of limitless potential and rewarding opportunities for those who venture forth.', 'Learn More', 'heading-text-button-section htb-2'],
    ['#DEX', '', '6MM-SWAP', 'In the vibrant tapestry of the 6MM ecosystem, the second project to emerge is none other than 6MM Swap. Aligned with the launch of the 6MM token on Pulsechain Mainnet, this eagerly anticipated endeavor aims to provide seamless token swapping functionalities. The distribution of 6MM tokens will be allocated to those who minted Pulse OG NFTs and to those who hold the NFTs at the time of the launch, offering a rewarding experience for early adopters.', 'Within this dynamic ecosystem, the holders of 6MM tokens are in for a treat. All fees generated through 6MM Swap, NFT royalties, and future DeFi tools will be generously rewarded to token holders based on the quantity of tokens they possess. This distribution will be facilitated through a smart contract treasury, diligently collecting fees from all protocols operating under the 6MM umbrella and autonomously distributing the rewards to 6MM token holders every 24 hours. Thus, the vibrant energy of the 6MM ecosystem flows back into the hands of its dedicated community, fostering a sense of collective growth and prosperity.', 'Learn More', 'heading-text-button-section htb-3'],
    ['#UPCOMING', '', 'PROJECTS', 'We have many defi tools set to launch under 6MM. All the fees generated from each protocol will be sent to the treasury where it’s distributed to the holders of 6MM tokens proportionately.', '', 'Learn More', 'heading-text-button-section htb-4'],
    ['', '', 'AIRDROPS', 'Blockchain is a big opportunity to re-imagine how we exchange value and interact with one another. It’s transformational at scale.', 'One world. One people. One market. One cryptocurrency. The future of money is here.', 'Learn More', 'heading-text-button-section htb-5']
]

const HomePage = () => {




    var type = 1;
    var n1 = 'NFT';
    var n2 = 'DEX';
    var n3 = 'ANALYTICS';
    var n4 = 'AIRDROP';
    var n5 = 'MORE';
    const run = () => {
        var tag = document.getElementsByClassName("colored_heading")[0].innerHTML;
        if (type == 1) {
            for (let i = 0; i < tag.length; i++) {
                tag.slice(0, i);
                setTimeout(() => { }, 500);
            }
            setTimeout(() => { }, 2000);
            for (let i = 0; i < n2.length; i++) {
                tag.concat(n2[i]);
                setTimeout(() => { }, 500);
            }
            type++;
        }
        else if (type == 2) {
            for (let i = 0; i < tag.length; i++) {
                tag.slice(0, i);
                setTimeout(() => { }, 500);
            }
            setTimeout(() => { }, 2000);
            for (let i = 0; i < n3.length; i++) {
                tag.concat(n2[i]);
                setTimeout(() => { }, 500);
            }
            type++;
        }
        else if (type == 3) {
            for (let i = 0; i < tag.length; i++) {
                tag.slice(0, i);
                setTimeout(() => { }, 500);
            }
            setTimeout(() => { }, 2000);
            for (let i = 0; i < n4.length; i++) {
                tag.concat(n2[i]);
                setTimeout(() => { }, 500);
            }
            type++;
        }
        else if (type == 4) {
            for (let i = 0; i < tag.length; i++) {
                tag.slice(0, i);
                setTimeout(() => { }, 500);
            }
            setTimeout(() => { }, 2000);
            for (let i = 0; i < n5.length; i++) {
                tag.concat(n2[i]);
                setTimeout(() => { }, 500);
            }
            type++;
        }
        else {
            for (let i = 0; i < tag.length; i++) {
                tag.slice(0, i);
                setTimeout(() => { }, 500);
            }
            setTimeout(() => { }, 2000);
            for (let i = 0; i < n1.length; i++) {
                tag.concat(n2[i]);
                setTimeout(() => { }, 500);
            }
            type = 1;
        }
    }
    
    
    
    
    
    return (
        <div className="home-page-parent body">
            <Navbar />
            {/* navbar-2 */}
            <div className="navbar-in-list">
                <div className='nav upper-nav'><a href='#NFT'>NFT</a></div>
                <div className='nav upper-nav'><a href='#DEX'>DEX</a></div>
                <div className='nav upper-nav'><a href='#ANALYTICS'>ANALYTICS</a></div>
                <div className='nav upper-nav'>MINT</div>

            </div>


            {/* under header hsb section */}
            <div className="under-header-section home-section">
                {/* <HeadingTextButton
                    heading1={HeadingTextButtons[0][0]}
                    heading2={HeadingTextButtons[0][1]}
                    colored_heading={HeadingTextButtons[0][2]}
                    summary1={HeadingTextButtons[0][3]}
                    summary2={HeadingTextButtons[0][4]}
                    text="Lance App"
                    class={HeadingTextButtons[0][6]}
                    >
                </HeadingTextButton> */}
                <div>
                    <h1>Ecosystem with</h1>
                   <DynamicHeader/>
                    <p>6MM is a Web3 Brand building on Pulsechain.</p>
                    <p>There is NO sacrifice, ONLY AIRDROPS :</p>
                    <button>Lance App</button>
                </div>
                {/* <div>
                    <DynamicHeader/>
                </div> */}
                <Dot_Animation />
            </div>

                    {/* {setInterval(run(), 2000)} */}


            {/* number 1-2-3 complete section */}
            <div className="ecosystem-section">
                <div className="ecosystem-name">ECOSYSTEM</div>
                <div className="number-and-types">
                    <div className="ecosystem-numbers">
                        <div className="numbering n1"></div>
                        <div className="numbering n2"></div>
                        <div className="numbering n3"></div>
                        <div className="number-shadow"></div>
                    </div>
                    <div className="all_ecosystems">
                        <EcoSystemTypes type="NFT" summary="Pulse OG is a collection of 999 NFTs on Pulsechain." class="ecosystem-multi-types" />
                        <EcoSystemTypes type="DEX" summary="6MM swap is the the DEX of 6mm." class="ecosystem-multi-types" />
                        <EcoSystemTypes type="UPCOMING" summary="Upcoming projects on 6MM" class="ecosystem-multi-types type-no-3" />
                    </div>
                </div>
            </div>



            {/* girl hsb section */}
            <div className="under-header-section" id="NFT">
                <div className="girl-image"></div>
                <HeadingTextButton
                    heading1={HeadingTextButtons[1][0]}
                    heading2={HeadingTextButtons[1][1]}
                    colored_heading={HeadingTextButtons[1][2]}
                    summary1={HeadingTextButtons[1][3]}
                    summary2={HeadingTextButtons[1][4]}
                    text="Learn More"
                    class={HeadingTextButtons[1][6]}
                >
                </HeadingTextButton>
            </div>



            {/* boxe chains hsb section */}
            <div className="under-header-section" id="DEX">
                <HeadingTextButton
                    heading1={HeadingTextButtons[2][0]}
                    heading2={HeadingTextButtons[2][1]}
                    colored_heading={HeadingTextButtons[2][2]}
                    summary1={HeadingTextButtons[2][3]}
                    summary2={HeadingTextButtons[2][4]}
                    text="Learn More"
                    class={HeadingTextButtons[2][6]}
                >
                </HeadingTextButton>
                <div className="box-chain-image"></div>

            </div>



            {/* bitcoin to dellar hsb section */}
            <div className="under-header-section" id="ANALYTICS">
                <div className="bitcoin-to-dollar-image"></div>
                <HeadingTextButton
                    heading1={HeadingTextButtons[3][0]}
                    heading2={HeadingTextButtons[3][1]}
                    colored_heading={HeadingTextButtons[3][2]}
                    summary1={HeadingTextButtons[3][3]}
                    summary2={HeadingTextButtons[3][4]}
                    text="Learn More"
                    class={HeadingTextButtons[3][6]}
                >
                </HeadingTextButton>
            </div>




            {/* bitcoin to dollar complete section */}
            <div className="protocols">
                <div className="protocol-heading">REAL YIELD FROM ALL<br /> PROTOCOLS</div>
                <div className="protocol-summary">6MM tokens will have no inflation. All the fees generated from the protocols are proportionately distributedto <br /> the holders of 6MM tokens. The fees are distributed in PLS and NOT 6MM. <br /> TRUE YIELD on Pulsechain</div>
            </div>



            {/* multiple circles */}
            <div className="multiple-circul"></div>


            {/* peracute hsb section */}
            <div className="under-header-section">
                <HeadingTextButton
                    heading1={HeadingTextButtons[4][0]}
                    heading2={HeadingTextButtons[4][1]}
                    colored_heading={HeadingTextButtons[4][2]}
                    summary1={HeadingTextButtons[4][3]}
                    summary2={HeadingTextButtons[4][4]}
                    text="Learn More"
                    class={HeadingTextButtons[4][6]}
                >
                </HeadingTextButton>
                <div className="peracute-image"></div>
            </div>




            {/* <Question_Section /> */}
            <QnA />



            {/* Footer Section */}

            <div className="footer">
                <div>
                    <div className="logo l1"></div>
                </div>
                <div className="social-media-icons">

                    <div className="every-box-icon">
                        <div className="icon discord"></div>
                        <div className="black-box"></div>
                    </div>
                    <div className="every-box-icon">
                        <div className="icon twitter"></div>
                        <div className="black-box"></div>
                    </div>
                    <div className="every-box-icon">
                        <div className="icon telegram"></div>
                        <div className="black-box"></div>
                    </div>
                    <div className="every-box-icon">
                        <div className="icon linkedin"></div>
                        <div className="black-box"></div>
                    </div>

                </div>
            </div>


        </div>
    )
};

export default HomePage;