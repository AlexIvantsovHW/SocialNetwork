import s from './Style.module.css'

export const Textarea=({input,meta,...props})=>{
  let Style= (meta.touched&&meta.error!=undefined?s.formError:s.form)
  let error=(meta.touched&&meta.error!=undefined?<span>{meta.error}</span>:'')

    return(
        <div className={Style}>
            <textarea {...input}{...props}/>
            {error}
        </div>
    )
}

export const Input=({input,meta,...props})=>{
    let Style= (meta.touched&&meta.error!=undefined?s.formError:s.form)
    let error=(meta.touched&&meta.error!=undefined?<span>{meta.error}</span>:'')
      return(
          <div className={Style}>
              <input {...input}{...props} placeholder={error.props===undefined?props.placeholder:meta.error}/>
             
             
          </div>
      )
  }