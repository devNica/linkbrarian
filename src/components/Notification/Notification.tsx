import { FC, useEffect } from "react";
import { resetNotification, useNotificationStore } from "../../store/notification";
import './Notification.css'

export const NotificationComponent: FC = () => {

    const { type, delay, message } = useNotificationStore(state => state)

    useEffect(() => {
        let timeout: NodeJS.Timeout
        if (delay) {
            timeout = setTimeout(() => {
                resetNotification()
            }, delay + 10)
        }

        return () => {
            clearTimeout(timeout)
        }
    }, [delay])

    if (!message) return null

    return (
        <div
            className={`notification ${type}`}
            style={{
                animation: `slideIn .7s ease forwards, fadeOut .7s ease forwards ${delay}ms`
            }}
        >
            <div className="content">
                {message}
            </div>
            <button
                className={`notification__close ${type}`}
                onClick={() => { }}
            >&times;</button>
        </div>
    )
}