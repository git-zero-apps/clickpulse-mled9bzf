// Email templates for ClickPulse
// These return HTML strings that can be passed to sendEmail()

export function welcomeEmail(userName: string): { subject: string; html: string } {
  return {
    subject: `Welcome to ClickPulse!`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #111; margin-bottom: 16px;">Welcome to ClickPulse 🎉</h1>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">Hi ${userName},</p>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">Thanks for signing up! We're excited to have you on board.</p>
        <a href="${process.env.NEXT_PUBLIC_APP_URL || ''}/dashboard" style="display: inline-block; padding: 12px 24px; background: #111; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 16px;">Go to Dashboard</a>
        <p style="font-size: 14px; color: #999; margin-top: 32px;">— The ClickPulse Team</p>
      </div>
    `,
  };
}

export function welcome_emailEmail(data: Record<string, string>): { subject: string; html: string } {
  return {
    subject: `ClickPulse: Welcome Email`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #111; margin-bottom: 16px;">Welcome Email</h1>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">You have a new notification from ClickPulse.</p>
        <div style="background: #f9f9f9; border-radius: 8px; padding: 20px; margin: 20px 0;">
          ${Object.entries(data).map(([k, v]) => `<p style="margin: 4px 0; font-size: 14px;"><strong>${k}:</strong> ${v}</p>`).join("")}
        </div>
        <a href="${process.env.NEXT_PUBLIC_APP_URL || ''}/dashboard" style="display: inline-block; padding: 12px 24px; background: #111; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600;">View in Dashboard</a>
        <p style="font-size: 14px; color: #999; margin-top: 32px;">— The ClickPulse Team</p>
      </div>
    `,
  };
}

export function weekly_performance_summaryEmail(data: Record<string, string>): { subject: string; html: string } {
  return {
    subject: `ClickPulse: Weekly Performance Summary`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #111; margin-bottom: 16px;">Weekly Performance Summary</h1>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">You have a new notification from ClickPulse.</p>
        <div style="background: #f9f9f9; border-radius: 8px; padding: 20px; margin: 20px 0;">
          ${Object.entries(data).map(([k, v]) => `<p style="margin: 4px 0; font-size: 14px;"><strong>${k}:</strong> ${v}</p>`).join("")}
        </div>
        <a href="${process.env.NEXT_PUBLIC_APP_URL || ''}/dashboard" style="display: inline-block; padding: 12px 24px; background: #111; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600;">View in Dashboard</a>
        <p style="font-size: 14px; color: #999; margin-top: 32px;">— The ClickPulse Team</p>
      </div>
    `,
  };
}

export function link_milestone_100_clicksEmail(data: Record<string, string>): { subject: string; html: string } {
  return {
    subject: `ClickPulse: Link Milestone 100 Clicks`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #111; margin-bottom: 16px;">Link Milestone 100 Clicks</h1>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">You have a new notification from ClickPulse.</p>
        <div style="background: #f9f9f9; border-radius: 8px; padding: 20px; margin: 20px 0;">
          ${Object.entries(data).map(([k, v]) => `<p style="margin: 4px 0; font-size: 14px;"><strong>${k}:</strong> ${v}</p>`).join("")}
        </div>
        <a href="${process.env.NEXT_PUBLIC_APP_URL || ''}/dashboard" style="display: inline-block; padding: 12px 24px; background: #111; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600;">View in Dashboard</a>
        <p style="font-size: 14px; color: #999; margin-top: 32px;">— The ClickPulse Team</p>
      </div>
    `,
  };
}

export function link_milestone_1000_clicksEmail(data: Record<string, string>): { subject: string; html: string } {
  return {
    subject: `ClickPulse: Link Milestone 1000 Clicks`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #111; margin-bottom: 16px;">Link Milestone 1000 Clicks</h1>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">You have a new notification from ClickPulse.</p>
        <div style="background: #f9f9f9; border-radius: 8px; padding: 20px; margin: 20px 0;">
          ${Object.entries(data).map(([k, v]) => `<p style="margin: 4px 0; font-size: 14px;"><strong>${k}:</strong> ${v}</p>`).join("")}
        </div>
        <a href="${process.env.NEXT_PUBLIC_APP_URL || ''}/dashboard" style="display: inline-block; padding: 12px 24px; background: #111; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600;">View in Dashboard</a>
        <p style="font-size: 14px; color: #999; margin-top: 32px;">— The ClickPulse Team</p>
      </div>
    `,
  };
}

export function link_milestone_10000_clicksEmail(data: Record<string, string>): { subject: string; html: string } {
  return {
    subject: `ClickPulse: Link Milestone 10000 Clicks`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #111; margin-bottom: 16px;">Link Milestone 10000 Clicks</h1>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">You have a new notification from ClickPulse.</p>
        <div style="background: #f9f9f9; border-radius: 8px; padding: 20px; margin: 20px 0;">
          ${Object.entries(data).map(([k, v]) => `<p style="margin: 4px 0; font-size: 14px;"><strong>${k}:</strong> ${v}</p>`).join("")}
        </div>
        <a href="${process.env.NEXT_PUBLIC_APP_URL || ''}/dashboard" style="display: inline-block; padding: 12px 24px; background: #111; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600;">View in Dashboard</a>
        <p style="font-size: 14px; color: #999; margin-top: 32px;">— The ClickPulse Team</p>
      </div>
    `,
  };
}

export function campaign_weekly_reportEmail(data: Record<string, string>): { subject: string; html: string } {
  return {
    subject: `ClickPulse: Campaign Weekly Report`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #111; margin-bottom: 16px;">Campaign Weekly Report</h1>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">You have a new notification from ClickPulse.</p>
        <div style="background: #f9f9f9; border-radius: 8px; padding: 20px; margin: 20px 0;">
          ${Object.entries(data).map(([k, v]) => `<p style="margin: 4px 0; font-size: 14px;"><strong>${k}:</strong> ${v}</p>`).join("")}
        </div>
        <a href="${process.env.NEXT_PUBLIC_APP_URL || ''}/dashboard" style="display: inline-block; padding: 12px 24px; background: #111; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600;">View in Dashboard</a>
        <p style="font-size: 14px; color: #999; margin-top: 32px;">— The ClickPulse Team</p>
      </div>
    `,
  };
}

export function payment_confirmationEmail(data: Record<string, string>): { subject: string; html: string } {
  return {
    subject: `ClickPulse: Payment Confirmation`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #111; margin-bottom: 16px;">Payment Confirmation</h1>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">You have a new notification from ClickPulse.</p>
        <div style="background: #f9f9f9; border-radius: 8px; padding: 20px; margin: 20px 0;">
          ${Object.entries(data).map(([k, v]) => `<p style="margin: 4px 0; font-size: 14px;"><strong>${k}:</strong> ${v}</p>`).join("")}
        </div>
        <a href="${process.env.NEXT_PUBLIC_APP_URL || ''}/dashboard" style="display: inline-block; padding: 12px 24px; background: #111; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600;">View in Dashboard</a>
        <p style="font-size: 14px; color: #999; margin-top: 32px;">— The ClickPulse Team</p>
      </div>
    `,
  };
}

export function payment_failedEmail(data: Record<string, string>): { subject: string; html: string } {
  return {
    subject: `ClickPulse: Payment Failed`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #111; margin-bottom: 16px;">Payment Failed</h1>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">You have a new notification from ClickPulse.</p>
        <div style="background: #f9f9f9; border-radius: 8px; padding: 20px; margin: 20px 0;">
          ${Object.entries(data).map(([k, v]) => `<p style="margin: 4px 0; font-size: 14px;"><strong>${k}:</strong> ${v}</p>`).join("")}
        </div>
        <a href="${process.env.NEXT_PUBLIC_APP_URL || ''}/dashboard" style="display: inline-block; padding: 12px 24px; background: #111; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600;">View in Dashboard</a>
        <p style="font-size: 14px; color: #999; margin-top: 32px;">— The ClickPulse Team</p>
      </div>
    `,
  };
}

export function team_member_invitationEmail(data: Record<string, string>): { subject: string; html: string } {
  return {
    subject: `ClickPulse: Team Member Invitation`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #111; margin-bottom: 16px;">Team Member Invitation</h1>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">You have a new notification from ClickPulse.</p>
        <div style="background: #f9f9f9; border-radius: 8px; padding: 20px; margin: 20px 0;">
          ${Object.entries(data).map(([k, v]) => `<p style="margin: 4px 0; font-size: 14px;"><strong>${k}:</strong> ${v}</p>`).join("")}
        </div>
        <a href="${process.env.NEXT_PUBLIC_APP_URL || ''}/dashboard" style="display: inline-block; padding: 12px 24px; background: #111; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600;">View in Dashboard</a>
        <p style="font-size: 14px; color: #999; margin-top: 32px;">— The ClickPulse Team</p>
      </div>
    `,
  };
}

export function monthly_limit_reachedEmail(data: Record<string, string>): { subject: string; html: string } {
  return {
    subject: `ClickPulse: Monthly Limit Reached`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #111; margin-bottom: 16px;">Monthly Limit Reached</h1>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">You have a new notification from ClickPulse.</p>
        <div style="background: #f9f9f9; border-radius: 8px; padding: 20px; margin: 20px 0;">
          ${Object.entries(data).map(([k, v]) => `<p style="margin: 4px 0; font-size: 14px;"><strong>${k}:</strong> ${v}</p>`).join("")}
        </div>
        <a href="${process.env.NEXT_PUBLIC_APP_URL || ''}/dashboard" style="display: inline-block; padding: 12px 24px; background: #111; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600;">View in Dashboard</a>
        <p style="font-size: 14px; color: #999; margin-top: 32px;">— The ClickPulse Team</p>
      </div>
    `,
  };
}
