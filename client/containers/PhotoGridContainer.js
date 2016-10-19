import { connect } from 'react-redux';
import { displayPosts } from '../action/creators';
import PhotoGrid from '../components/PhotoGrid';

const mapStateToProps = (state) => {
	console.log(state);
	return { posts: state.posts };
};

const mapDispatchToProps = dispatch => ({
	displayAllPosts: (posts) => {
		dispatch(displayPost(posts));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PhotoGrid);