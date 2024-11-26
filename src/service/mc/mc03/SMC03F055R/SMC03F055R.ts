import { ServiceSupport } from '@/service/ServiceSupport';
import { SMC03F055RInVo } from './SMC03F055RInVo';
import { SMC03F055ROutVo } from './SMC03F055ROutVo';
import {
  convertObjectToString,
  convertStringToObject,
  makeSkyIn,
  SkyIn,
  SkyOut,
} from '@/utils';
import { axiosClient } from '@/lib/AxiosClient';

export class SMC03F055R extends ServiceSupport<
  SMC03F055RInVo,
  SMC03F055ROutVo
> {
  protected async callProcess(
    inVo: SMC03F055RInVo,
  ): Promise<SkyOut<SMC03F055ROutVo>> {
    console.log('call SMC03F055R');

    const requestToTuxedo: string | null = this.encode(inVo);

    /// TODO Failure Handler
    if (!requestToTuxedo) return Promise.reject('Error Parsing');

    console.log(requestToTuxedo);

    try {
      const response = await axiosClient.post('/message', requestToTuxedo);

      const responseFromTuxedo: string = response.data;

      const parsed = this.decode(responseFromTuxedo);

      /// TODO Failure Handler
      if (!parsed) return Promise.reject('Error Parsing');

      return parsed;
    } catch (error) {
      /// TODO Failure Handler
      return Promise.reject(error);
      // throw error;
    }
  }
  protected encode(inVo: SMC03F055RInVo): string | null {
    console.log(this.userDataIn);

    const skyIn: SkyIn<SMC03F055RInVo> | null = makeSkyIn({
      typeClass: SMC03F055RInVo,
      data: inVo,
      userDataIn: this.userDataIn,
    });

    if (!skyIn) return null;

    return convertObjectToString(skyIn);
  }
  protected decode(
    responseFromTuxedo: string,
  ): SkyOut<SMC03F055ROutVo> | null {
    return convertStringToObject<SkyOut<SMC03F055ROutVo>>({
      index: 0,
      input: responseFromTuxedo,
      classInstance: new SkyOut(SMC03F055ROutVo),
    });
  }
}
