// export class ServiceSupport {}

import { makeSkyUserDataIn, SkyOut, SkyUserDataIn } from '@/utils';

export abstract class ServiceSupport<I, O> {
  constructor(protected screenId: string) {}

  public async call(inVo: I): Promise<SkyOut<O>> {
    return this.callProcess(inVo);
  }

  protected abstract callProcess(inVo: I): Promise<SkyOut<O>>;

  protected abstract encode(inVo: I): string | null;

  protected abstract decode(responseFromTuxedo: string): SkyOut<O> | null;

  protected className: string = this.constructor.name;

  protected userDataIn: SkyUserDataIn = makeSkyUserDataIn({
    screenId: this.screenId,
    tuxedoCode: this.className,
  });
}
