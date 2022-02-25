import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsShopDataFetching } from "../../reducers/shop/shop-selectors";

import Loader from "../hoc/loader/Loader";
import ShopPage from "../pages/shop-page/ShopPage";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsShopDataFetching,
});

const ShopPageContainer = compose(connect(mapStateToProps), Loader)(ShopPage);

export default ShopPageContainer;
