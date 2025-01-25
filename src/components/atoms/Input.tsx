import * as classes from './Input.module.css'

type InputProps = {
  label: string
  id: string
  className?: string
}

const Input = ({
  label,
  id,
  className = '',
  ...rest
}: InputProps &
  React.InputHTMLAttributes<HTMLInputElement>): React.JSX.Element => {
  return (
    <div className={`${classes.container} ${className}`}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest} />
    </div>
  )
}

export default Input
