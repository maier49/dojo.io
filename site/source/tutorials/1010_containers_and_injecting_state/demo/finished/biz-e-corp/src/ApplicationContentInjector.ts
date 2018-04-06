import Injector from '@dojo/widget-core/Injector';
import ApplicationContext from './ApplicationContext';

export default class ApplicationContentInjector extends Injector<ApplicationContext> {
	private _applicationContext: ApplicationContext;

	constructor(applicationContext: ApplicationContext) {
		super({});
		this._applicationContext = applicationContext;
		applicationContext.on('invalidate', () => {
			this.emit({ type: 'invalidate' });
		});
	}
}
