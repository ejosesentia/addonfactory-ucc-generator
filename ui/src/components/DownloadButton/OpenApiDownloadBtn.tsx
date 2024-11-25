import React from 'react';
import { getBuildDirPath } from '../../util/script';
import DownloadButton from './DownloadButton';
import { getUnifiedConfigs } from '../../util/util';

const fileUrl = getBuildDirPath().replace('js/build', 'openapi.json');

function OpenApiDownloadButton() {
    const unifiedConfigs = getUnifiedConfigs();
    if (unifiedConfigs.meta.hideOpenAPI) {
        return null;
    }
    return (
        <DownloadButton fileUrl={fileUrl} fileNameAfterDownload="openapi.json">
            OpenAPI.json
        </DownloadButton>
    );
}

export default OpenApiDownloadButton;
