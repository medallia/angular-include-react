import IncludeReactController from './include-react-controller';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import ReactDOM from 'react-dom';
import IncludeReactReactComponent from './include-react-react-component';

chai.use(sinonChai);

describe('IncludeReact controller', function() {
	let sandbox;
	let includeReactController;
	let mockElement;
	let getComponentMock;
	let mockRender;
	let mockUnmount;
	let mockComponent;
	let mockNgRedux;

	beforeEach(function() {
		sandbox = sinon.sandbox.create();
		mockElement = [{}];
		mockComponent = function MyComponent() {};
		mockNgRedux = {};
		mockRender = sandbox.stub(ReactDOM, 'render');
		mockUnmount = sandbox.stub(ReactDOM, 'unmountComponentAtNode');
		getComponentMock = sandbox.stub();
		includeReactController = new IncludeReactController(
			mockElement,
			{
				getComponent: getComponentMock,
			},
			mockNgRedux
		);
	});

	it('should mount component on $postLink', function() {
		getComponentMock.withArgs('myComponent').returns(mockComponent);
		includeReactController.component = 'myComponent';
		includeReactController.$postLink();
		expect(mockRender).to.have.been.calledOnce;
		const { type, props } = mockRender.firstCall.args[0];
		const domContainerNode = mockRender.firstCall.args[1];
		expect(type).to.equal(IncludeReactReactComponent);
		expect(props).to.have.property('store').that.equals(mockNgRedux);
		expect(props).to.have.property('component').that.equals(mockComponent);
		expect(domContainerNode).to.equal(mockElement[0]);
	});

	it('should unmount component on destroy', function() {
		includeReactController.$onDestroy();
		expect(mockUnmount).to.have.been.calledOnce;
		expect(mockUnmount).to.have.been.calledWith(mockElement[0]);
	});

	afterEach(function() {
		sandbox.restore();
	});
});
