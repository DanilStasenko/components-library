import { FC } from 'react';
import "../css/MyButton.css";
export interface MyButtonProps {
    children: any;
    size: string;
    onClick?: () => void;
    extraClass?: string;
}
declare const MyButton: FC<MyButtonProps>;
export default MyButton;
