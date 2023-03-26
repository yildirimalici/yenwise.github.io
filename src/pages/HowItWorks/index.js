import React from 'react';
import Container from 'react-bootstrap/Container';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Player } from "@lottiefiles/react-lottie-player";
import howitworks from '../../img/how-it-works.json';
import languages from '../../img/languages.png';
import apimoderator from '../../img/api-moderator.json';

function HowItWorks() {
    return (
        <>
            <Container className='py-5'>
                <div className="pt-5 text-center">
                    <h5 className="mb-4">How it Works</h5>
                    <h2 className="fw-light mb-4">Using machine learning to<br />reduce toxicity online</h2>
                </div>
                <div className='row'>
                    <div className='col-xl-6 p-4'>
                        <h5 className='fw-light lh-base mb-4'>yenwise uses machine learning models to identify abusive comments. The models score a phrase based on the perceived impact the text may have in a conversation. Developers and publishers can use this score to give feedback to commenters, help moderators more easily review comments, or help readers filter out
                            <OverlayTrigger
                                key="placement1"
                                placement="top"
                                overlay={
                                    <Tooltip id={`tooltip1`}>
                                        We define toxicity as a rude, disrespectful, or unreasonable comment that is likely to make someone leave a discussion.
                                    </Tooltip>
                                }
                            >
                                <u className='link-offset-3'>“toxic”</u>
                            </OverlayTrigger>
                            language.</h5>
                        <h5 className='fw-light lh-base'>yenwise models provide scores for several different attributes. In addition to the flagship Toxicity attribute, here are some of the other attributes yenwise can provide scores for:</h5>

                        <ul className='how-it-works-list fw-normal'>
                            <li>Severe Toxicity</li>
                            <li>Insult</li>
                            <li>Profanity</li>
                            <li>Identity attack</li>
                            <li>Threat</li>
                            <li>Sexually explicit</li>
                        </ul>
                    </div>
                    <div className='col-xl-6 p-4'>
                        <div className='d-flex justify-content-center align-items-center h-100 w-100'>
                            <div className='lottie-player-1'>
                                <Player
                                    autoplay
                                    speed={1}
                                    loop
                                    src={howitworks}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <div className='bg-body-secondary py-5'>
                <Container className='py-5'>
                    <div className='row'>
                        <div className='col-xl-6 p-4'>
                            <h5 className='lh-base mb-4'>Language availability</h5>
                            <h5 className='fw-light lh-base mb-4'>yenwise API is free and available to use in Arabic, Chinese, Czech, Dutch, English, French, German, Hindi, Hinglish, Indonesian, Italian, Japanese, Korean, Polish, Portuguese, Russian, Spanish, and Swedish. The team is constantly developing models to support new languages.</h5>
                            <h5 className='fw-light lh-base'>To learn more about international publishers and platforms using yenwise API, check out our case studies. To learn more about languages in development, visit the Developers site.</h5>
                        </div>
                        <div className='col-xl-6 p-4'>
                            <div className='d-flex justify-content-center align-items-center h-100 w-100'>
                                <img src={languages} alt='language' className='grid-img' />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <Container className='py-5'>
                <div className='row'>
                    <div className='col-xl-6 p-4'>
                        <div className='d-flex justify-content-center align-items-center h-100 w-100'>
                            <div className='lottie-player-2'>
                                <Player
                                    autoplay
                                    speed={1}
                                    loop
                                    src={apimoderator}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-6 p-4'>
                        <h5 className='lh-base mb-4'>Applying the model</h5>
                        <h3 className='fw-light lh-base mb-4'>yenwise in Action</h3>
                        <h5 className='fw-light lh-base mb-4'>One of yenwise API’s most common uses is content moderation. Developers at platforms like DISQUS and publications like The Wall Street Journal augment their existing content moderation systems with yenwise, creating custom combinations of attributes to suit the needs of their platforms.</h5>
                        <h5 className='fw-light lh-base'>yenwise API is meant to make content moderation less of a burden on individuals and organizations, but is not meant to completely replace the work of human decision-makers. yenwise API helps developers and moderators make better decisions at scale, allowing healthy dialogue to flourish.</h5>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default HowItWorks