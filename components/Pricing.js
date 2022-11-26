// 引入 Styled Components 套件
import styled from "styled-components";

const StyledSection = styled.section`
  background-color: #fff;
  padding: 100px 0;
  @media (max-width: 768px) {
    padding: 90px 0;
  }
`;

export default function Pricing(props) {
  return (
    <StyledSection id="pricing">
      {/* 最外層包裝容器 */}
      <div className="container text-center">
        <h2 className="fs-1 fw-bold">{props.sectionHeading}</h2>
        <p className="fs-4 mb-5">{props.sectionSubHeading}</p>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            {/* 卡片1 */}
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h3 className="my-0 fw-normal">{props.cardOneHeading}</h3>
              </div>
              <div className="card-footer">
                <h2 className="card-title pricing-card-title">
                  {props.cardOneFee}
                </h2>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>{props.cardOneFeatureOne}</li>
                  <li>{props.cardOneFeatureTwo}</li>
                  <li>{props.cardOneFeatureThree}</li>
                </ul>
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-outline-dark">
                  {props.cardCta}
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            {/* 卡片2 */}
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h3 className="my-0 fw-normal">{props.cardTwoHeading}</h3>
              </div>
              <div className="card-footer">
                <h2 className="card-title pricing-card-title">
                  {props.cardTwoFee}
                  <small className="text-muted fw-light">
                    {props.cardTwoPeriod}
                  </small>
                </h2>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>{props.cardTwoFeatureOne}</li>
                  <li>{props.cardTwoFeatureTwo}</li>
                  <li>{props.cardTwoFeatureThree}</li>
                </ul>
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-outline-dark">
                  {props.cardCta}
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            {/* 卡片3 */}
            <div className="card mb-4 rounded-3 shadow-sm border-dark">
              <div className="card-header py-3 text-bg-dark border-dark">
                <h3 className="my-0 fw-normal">{props.cardThreeHeading}</h3>
              </div>
              <div className="card-footer">
                <h2 className="card-title pricing-card-title">
                  {props.cardThreeFee}
                  <small className="text-muted fw-light">
                    {props.cardThreePeriod}
                  </small>
                </h2>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>{props.cardThreeFeatureOne}</li>
                  <li>{props.cardThreeFeatureTwo}</li>
                  <li>{props.cardThreeFeatureThree}</li>
                  <li>{props.cardThreeFeatureFour}</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-dark">
                  {props.cardCta}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  );
}
