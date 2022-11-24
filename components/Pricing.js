// 引入 Styled Components 套件
import styled from "styled-components";

const StyledSection = styled.section`
  padding: 7% 15%;
`;

export default function Pricing() {
  return (
    <StyledSection id="pricing">
      {/* 最外層包裝容器 */}
      <div className="container text-center">
        <h2 className="fs-1 fw-bold">A Plan for Every Dog&apos;s Needs</h2>
        <p className="fs-4 mb-5">
          Simple and affordable price plans for your and your dog.
        </p>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            {/* 卡片1 */}
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h3 className="my-0 fw-normal">Chihuahua</h3>
              </div>
              <div className="card-footer">
                <h2 className="card-title pricing-card-title">Free</h2>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>5 Matches Per Day</li>
                  <li>10 Messages Per Day</li>
                  <li>Unlimited App Usage</li>
                </ul>
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-outline-dark">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            {/* 卡片2 */}
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h3 className="my-0 fw-normal">Labrador</h3>
              </div>
              <div className="card-footer">
                <h2 className="card-title pricing-card-title">
                  $49 <small className="text-muted fw-light">/ mo</small>
                </h2>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Unlimited Matches</li>
                  <li>Unlimited Messages</li>
                  <li>Unlimited App Usage</li>
                </ul>
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-outline-dark">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            {/* 卡片3 */}
            <div className="card mb-4 rounded-3 shadow-sm border-dark">
              <div className="card-header py-3 text-bg-dark border-dark">
                <h3 className="my-0 fw-normal">Mastiff</h3>
              </div>
              <div className="card-footer">
                <h2 className="card-title pricing-card-title">
                  $99 <small className="text-muted fw-light">/ mo</small>
                </h2>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Pirority Listing</li>
                  <li>Unlimited Matches</li>
                  <li>Unlimited Messages</li>
                  <li>Unlimited App Usage</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-dark">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  );
}
