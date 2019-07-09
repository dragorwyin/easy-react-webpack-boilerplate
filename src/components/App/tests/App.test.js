import App from '..';
describe('<App />', () => {

	const element = shallow(<App />);

	it('should render proper message in <div>', () => {
		expect(element.text()).toEqual('Welcome to React!!');
	});

	it('should contain proper class', () => {
		expect(element.hasClass('c--app')).toBeTrue;
	});
});