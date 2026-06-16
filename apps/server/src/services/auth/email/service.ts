import { resend } from "../../../lib/resend";
import { UserPublic } from "../../../lib/user.dto";

const LOGO_URL = "../../../../../web/public/slymelogo.png";

const getBaseTemplate = (title: string, message: string, user: UserPublic) => `
  <div style="font-family: 'Inter', sans-serif; background:#000; padding:40px 20px; color: white;">
    <div style="max-width:480px; margin:auto; background:#111; padding:32px; border-radius:16px; text-align:center; border: 1px solid #222;">
      
      <img
        src="${LOGO_URL}"
        alt="Slyme"
        style="width:120px; height:auto; margin-bottom:24px;"
      />

      <h1 style="font-size:24px; font-weight:bold; margin-bottom:8px; color: #fff;">
        ${title}
      </h1>

      <p style="color:#aaa; font-size:16px; margin-bottom:24px;">
        ${message}
      </p>

      <div style="margin: 24px 0;">
        <img
          src="${user.avatarUrl || "../../../../../web/public/slymelogo.png"}"
          alt="${user.username}"
          style="width:80px; height:80px; border-radius:50%; border: 2px solid #22c55e; object-fit: cover;"
        />
        <p style="font-weight:600; font-size:18px; margin-top:12px; color: #fff;">
          @${user.username}
        </p>
      </div>

      <div style="height: 1px; background: #222; margin: 24px 0;"></div>

      <p style="font-size:12px; color:#555;">
        You're receiving this because you signed into Slyme.
      </p>

    </div>
  </div>
`;

