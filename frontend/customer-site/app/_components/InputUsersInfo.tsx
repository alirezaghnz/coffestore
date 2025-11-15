interface InputUsersInfoProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  wrapperClassName?: string;
}

export default function InputUsersInfo({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  type = "text",
  wrapperClassName = "",
}: InputUsersInfoProps) {
  return (
    <div className={wrapperClassName}>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border rounded-lg p-2"
        placeholder={placeholder}
      />
    </div>
  );
}
