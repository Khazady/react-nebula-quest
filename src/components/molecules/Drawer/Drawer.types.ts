export type DrawerProps = React.PropsWithChildren<{
  open: boolean;
  onClose: () => void;
  className?: string;
}>;
