import { FunctionComponent } from 'preact';
import { Locale } from 'util/locale';
import { SettingsGeneralUpdate } from 'ui/settings/general/settings-general-update';
import { SettingsGeneralAppearance } from 'ui/settings/general/settings-general-appearance';
import { SettingsGeneralFunction } from 'ui/settings/general/settings-general-function';
import { SettingsGeneralAudit } from 'ui/settings/general/settings-general-audit';
import { SettingsGeneralLock } from 'ui/settings/general/settings-general-lock';
import { SettingsGeneralStorage } from 'ui/settings/general/settings-general-storage';
import { SettingsGeneralAdvanced } from 'ui/settings/general/settings-general-advanced';
import { useLayoutEffect, useRef } from 'preact/hooks';

export const SettingsGeneralView: FunctionComponent<{
    selectedMenuAnchor: string | undefined;
}> = ({ selectedMenuAnchor }) => {
    const contentRef = useRef<HTMLDivElement>();

    useLayoutEffect(() => {
        if (selectedMenuAnchor) {
            const el = document.getElementById(selectedMenuAnchor);
            el?.scrollIntoView();
        } else {
            const scroller = contentRef.current.closest('.scroller');
            if (scroller) {
                scroller.scrollTop = 0;
            }
        }
    }, [selectedMenuAnchor]);

    return (
        <div class="settings__content" ref={contentRef}>
            <h1 id="top">
                <i class="fa fa-cog settings__head-icon" /> {Locale.setGenTitle}
            </h1>

            <SettingsGeneralUpdate />
            <SettingsGeneralAppearance />
            <SettingsGeneralFunction />
            <SettingsGeneralAudit />
            <SettingsGeneralLock />
            <SettingsGeneralStorage />
            <SettingsGeneralAdvanced />
        </div>
    );
};
