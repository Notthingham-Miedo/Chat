// COMENTADO: useMemo ya no se necesita después de ocultar componentes
// import { useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';
// COMENTADO: Imports no utilizadas después de ocultar componentes
// import { getConfigDefaults, PermissionTypes, Permissions } from 'librechat-data-provider';
import type { ContextType } from '~/common';
// COMENTADO: Import de ModelSelector - Selector de modelo oculto
// import ModelSelector from './Menus/Endpoints/ModelSelector';
import { PresetsMenu, HeaderNewChat, OpenSidebar } from './Menus';
import { useGetStartupConfig } from '~/data-provider';
// COMENTADO: Import de ExportAndShareMenu - Botones de compartir y exportar chat ocultos
// import ExportAndShareMenu from './ExportAndShareMenu';
// COMENTADO: useHasAccess ya no se necesita después de ocultar componentes
import { useMediaQuery } from '~/hooks';
// COMENTADO: Import de BookmarkMenu - Menú de marcadores oculto
// import BookmarkMenu from './Menus/BookmarkMenu';
// COMENTADO: Import de TemporaryChat - Chat temporario oculto
// import { TemporaryChat } from './TemporaryChat';
// COMENTADO: Import de AddMultiConvo - Múltiples conversaciones ocultas
// import AddMultiConvo from './AddMultiConvo';

// COMENTADO: Variable no utilizada después de ocultar componentes
// const defaultInterface = getConfigDefaults().interface;

export default function Header() {
  const { data: startupConfig } = useGetStartupConfig();
  const { navVisible, setNavVisible } = useOutletContext<ContextType>();
  // COMENTADO: Variables no utilizadas después de ocultar componentes
  /*
  const interfaceConfig = useMemo(
    () => startupConfig?.interface ?? defaultInterface,
    [startupConfig],
  );

  const hasAccessToBookmarks = useHasAccess({
    permissionType: PermissionTypes.BOOKMARKS,
    permission: Permissions.USE,
  });

  const hasAccessToMultiConvo = useHasAccess({
    permissionType: PermissionTypes.MULTI_CONVO,
    permission: Permissions.USE,
  });
  */

  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  return (
    <div className="sticky top-0 z-10 flex h-14 w-full items-center justify-between bg-white p-2 font-semibold text-text-primary dark:bg-gray-800">
      <div className="hide-scrollbar flex w-full items-center justify-between gap-2 overflow-x-auto">
        <div className="mx-1 flex items-center gap-2">
          <div
            className={`flex items-center gap-2 ${
              !isSmallScreen ? 'transition-all duration-200 ease-in-out' : ''
            } ${
              !navVisible
                ? 'translate-x-0 opacity-100'
                : 'pointer-events-none translate-x-[-100px] opacity-0'
            }`}
          >
            <OpenSidebar setNavVisible={setNavVisible} />
            <HeaderNewChat />
          </div>
          <div
            className={`flex items-center gap-2 ${
              !isSmallScreen ? 'transition-all duration-200 ease-in-out' : ''
            } ${!navVisible ? 'translate-x-0' : 'translate-x-[-100px]'}`}
          >
            {/* COMENTADO: ModelSelector - Selector de modelo oculto 
            <ModelSelector startupConfig={startupConfig} />
            */}
            {/* COMENTADO: PresetsMenu - Configuración preestablecida oculta 
            {interfaceConfig.presets === true && interfaceConfig.modelSelect && <PresetsMenu />}
            */}
            {/* COMENTADO: BookmarkMenu - Menú de marcadores oculto 
            {hasAccessToBookmarks === true && <BookmarkMenu />}
            */}
            {/* COMENTADO: AddMultiConvo - Múltiples conversaciones ocultas 
            {hasAccessToMultiConvo === true && <AddMultiConvo />}
            */}
            {isSmallScreen && (
              <>
                {/* COMENTADO: ExportAndShareMenu - Botones de compartir y exportar chat ocultos 
                <ExportAndShareMenu
                  isSharedButtonEnabled={startupConfig?.sharedLinksEnabled ?? false}
                />
                */}
                {/* COMENTADO: TemporaryChat - Chat temporario oculto 
                <TemporaryChat />
                */}
              </>
            )}
          </div>
        </div>
        {!isSmallScreen && (
          <div className="flex items-center gap-2">
            {/* COMENTADO: ExportAndShareMenu - Botones de compartir y exportar chat ocultos 
            <ExportAndShareMenu
              isSharedButtonEnabled={startupConfig?.sharedLinksEnabled ?? false}
            />
            */}
            {/* COMENTADO: TemporaryChat - Chat temporario oculto 
            <TemporaryChat />
            */}
          </div>
        )}
      </div>
      {/* Empty div for spacing */}
      <div />
    </div>
  );
}
