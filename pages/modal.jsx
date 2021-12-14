import { ActiveCampaignInputs, handleActiveCampaignSubmit } from 'active-campaign-react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'


const Modal = (props) => {
    const router = useRouter()
    const { register, handleSubmit } = useForm()
    const formId = '1'

    const onSubmit = async (data) => {
        handleActiveCampaignSubmit(data, 'diegofarfan', formId)
        console.log(data);
        router.push("/reserva-una-cita")
    }

    if (!props.show) {
        return (null)
    }
    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{props.title}</h2>
                </div>
                <div className="modal-body">

                    {/* <form onSubmit={e => handleSubmit(e)}>
                            <input type="hidden" name="u" value={formId} />
                            <input type="hidden" name="f" value={formId} />
                            <input type="hidden" name="s" />
                            <input type="hidden" name="c" value="0" />
                            <input type="hidden" name="m" value="0" />
                            <input type="hidden" name="act" value="sub" />
                            <input type="hidden" name="v" value="2" />

                            <label>Email</label>
                            <input name="email" type="email" id="email"  required/>

                            <button id="modalbutton" type="submit">{props.actionName}</button>
                        </form> */}

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <ActiveCampaignInputs formId={formId} />
                        <h2>
                            <label>Email</label>
                        </h2>
                        <input name="email" type="email" id="email" {...register('email', { required: true })} />

                        <button id="modalbutton" type="submit">{props.actionName}</button>
                    </form>
                </div>
                {/* <div className="modal-footer">
                    <Link href="/reserva-tu-cita">
                        <a>
                            <button id="modalbutton" className="button">{props.actionName}</button>

                        </a>

                    </Link>
                </div> */}
            </div>
        </div>
    )
}

export default Modal