import React from 'react';
import Container from 'react-bootstrap/Container';
import landing from '../../video/landing.mp4';
import moderator from '../../video/moderator.mp4';
import commenter from '../../video/commenter.mp4';
import readers from '../../video/readers.mp4';
import checkmark from '../../img/checkmark.svg';

function Home() {
  return (
    <>
      <Container>
        <div className="pt-5 text-center">
          <h1 className="display-5 fw-light mb-4">Using machine learning to<br />reduce toxicity online</h1>
          <h5 className="fw-light lh-base">yenwise API can help mitigate toxicity<br />and ensure healthy dialogue online.</h5>
        </div>
      </Container>
      <div className="ratio landing-video">
        <video autoPlay muted loop>
          <source src={landing} type='video/mp4' />
        </video>
      </div>

      <div className="py-5 text-center bg-purple d-flex justify-content-center">
        <div className='py-5 grid-text'>
          <h3 className='fw-light lh-base'>Toxicity online poses a serious challenge for platforms and publishers. Online abuse and harassment silence important voices in conversation, forcing already marginalized people offline.</h3>
        </div>
      </div>

      <div className='py-5'>
        <div className="py-5 text-center d-flex justify-content-center">
          <div className='grid-text'>
            <h5 className="mb-4">What can you build with yenwise?</h5>
            <h5 className="fw-light lh-base">Publishers, platforms, and individuals can use yenwise to power a variety of different use cases, in comment sections, forums, or any text-based conversations. Developers integrate and customize yenwise for many different audiences.</h5>
          </div>
        </div>

        <div>
          <div className='row justify-content-md-center text-center pb-5 m-0'>
            <div className='col-12 col-lg-3'>
              <div className='p-4'>
                <div className="ratio ratio-4x3">
                  <video autoPlay muted loop>
                    <source src={moderator} type='video/mp4' />
                  </video>
                </div>
              </div>
              <div className='p-4'>
                <h5>For moderators</h5>
                <h6>Moderators use yenwise to quickly prioritize and review comments that have been reported.</h6>
              </div>
            </div>
            <div className='col-12 col-lg-3'>
              <div className='p-4'>
                <div className="ratio ratio-4x3">
                  <video autoPlay muted loop>
                    <source src={commenter} type='video/mp4' />
                  </video>
                </div>
              </div>
              <div className='p-4'>
                <h5>For commenters</h5>
                <h6>yenwise can give feedback to commenters who post toxic comments.</h6>
              </div>
            </div>
            <div className='col-12 col-lg-3'>
              <div className='p-4'>
                <div className="ratio ratio-4x3">
                  <video autoPlay muted loop>
                    <source src={readers} type='video/mp4' />
                  </video>
                </div>
              </div>
              <div className='p-4'>
                <h5>For readers</h5>
                <h6>Developers create tools so readers can control which comments they see, like hiding comments.</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-body-secondary py-5'>
        <div className="py-5 text-center d-flex justify-content-center">
          <div className='grid-text'>
            <h5 className="mb-4">Why should you use yenwise?</h5>
            <h5 className="fw-light lh-base">yenwise has been shown to increase engagement by helping platforms and publishers create safe environments for conversation, and by helping individuals make healthier contributions online. </h5>
          </div>
        </div>

        <Container>
          <div className='row justify-content-md-center text-center pb-5 m-0'>
            <div className='col-12 col-lg-3'>
              <div className='grid-icon py-3'>
                <img src={checkmark} alt='check mark' />
              </div>
              <h5>Enables healthy<br />conversations</h5>
            </div>
            <div className='col-12 col-lg-3'>
              <div className='grid-icon py-3'>
                <img src={checkmark} alt='check mark' />
              </div>
              <h5>Reduces toxicity and<br />abusive behavior</h5>
            </div>
            <div className='col-12 col-lg-3'>
              <div className='grid-icon py-3'>
                <img src={checkmark} alt='check mark' />
              </div>
              <h5>Free. Self-Serve.<br />Customizable.</h5>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Home;