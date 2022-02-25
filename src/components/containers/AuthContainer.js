import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsUserFetching } from "../../reducers/user/user-selectors";

import Loader from "../hoc/loader/Loader";
import Auth from "../pages/auth/Auth";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsUserFetching,
});

const AuthContainer = compose(connect(mapStateToProps), Loader)(Auth);

export default AuthContainer;
