import avatar from "gradient-avatar";

interface Props {
  uid: string;
  size: number;
}

export default function Avatar(props: Props) {
  const { uid, size } = props;

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size,
        backgroundColor: "lightgrey",
        overflow: "hidden",
      }}
      {...(props.uid && {
        dangerouslySetInnerHTML: { __html: avatar(uid, size) },
      })}
    />
  );
}
