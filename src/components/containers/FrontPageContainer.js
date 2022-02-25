import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsShopDataFetching } from "../../reducers/shop/shop-selectors";

import Loader from "../hoc/loader/Loader";
import FrontPage from "../pages/front-page/FrontPage";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsShopDataFetching,
});

const FrontPageContainer = compose(connect(mapStateToProps), Loader)(FrontPage);

export default FrontPageContainer;
