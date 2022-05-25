import type { NextPage } from "next";
import {
  PageTemplate,
  SettingsUpdateProfile,
  SettingsMarketingPreferences,
  SettingsSavedAddress,
  SettingsPaymentMethods,
  SettingsCards,
  SettingsSupport,
  SettingsInveitedFriend,
  SettingsDiscounts,
} from "../components";
import {
  IconArrowRight,
  IconPaymentMethod,
  IconCards,
  IconSupport,
  IconInvitedFriend,
  IconVoucher,
} from "../components/icon-family";
import Styles from '../styles/settings.module.css';

const Settings: NextPage = () => {
  return (
    <PageTemplate
      title="Configurações - Nibble"
      description="Configurações do usuário no nibble"
    >
      <div className={Styles.container}>
        <h1>Configurações</h1>
        <p>Geral</p>
        <ul>
          <li>
            <SettingsUpdateProfile />
          </li>
          <li>
            <SettingsSavedAddress />
          </li>
          <li>
            <SettingsMarketingPreferences />
          </li>
        </ul>
        <p>Pagamentos</p>
        <ul>
          <li>
            <SettingsPaymentMethods />
          </li>
          <li>
            <SettingsCards />
          </li>
        </ul>
        <p>Outros</p>
        <ul>
          <li>
            <SettingsSupport />
          </li>
          <li>
            <SettingsInveitedFriend />
          </li>
          <li>
            <SettingsDiscounts />
          </li>
        </ul>
      </div>
    </PageTemplate>
  )
};


export default Settings;