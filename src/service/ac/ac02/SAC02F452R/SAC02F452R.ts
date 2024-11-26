import { ServiceSupport } from '@/service/ServiceSupport';
import { SAC02F452RInVo } from './SAC02F452RInVo';
import { SAC02F452ROutVo } from './SAC02F452ROutVo';
import {
  convertObjectToString,
  convertStringToObject,
  makeSkyIn,
  makeSkyUserDataIn,
  SkyIn,
  SkyOut,
  SkyUserDataIn,
} from '@/utils';
import { axiosClient } from '@/lib/AxiosClient';

export class SAC02F452R extends ServiceSupport<
  SAC02F452RInVo,
  SAC02F452ROutVo
> {
  protected encode(inVo: SAC02F452RInVo): string | null {
    // const userDataIn: SkyUserDataIn = makeSkyUserDataIn({
    //   screenId: this.screenId,
    //   tuxedoCode: this.className,
    // });

    console.log('encode SAC02F452R');
    console.log(this.screenId);
    console.log(this.className);

    console.log('LERUUCCO this.userDataIn');

    console.log(this.userDataIn);

    const skyIn: SkyIn<SAC02F452RInVo> | null = makeSkyIn({
      typeClass: SAC02F452RInVo,
      data: inVo,
      userDataIn: this.userDataIn,
    });

    if (!skyIn) return null;

    return convertObjectToString(skyIn);
  }

  protected decode(
    responseFromTuxedo: string,
  ): SkyOut<SAC02F452ROutVo> | null {
    console.log('decode SAC02F452R');
    return convertStringToObject<SkyOut<SAC02F452ROutVo>>({
      index: 0,
      input: responseFromTuxedo,
      classInstance: new SkyOut(SAC02F452ROutVo),
    });
  }

  protected async callProcess(
    inVo: SAC02F452RInVo,
  ): Promise<SkyOut<SAC02F452ROutVo>> {
    console.log('call SAC02F452R');

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
    }
  }
}
