// Copyright 2017-2020 @polkadot/react-params authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Props } from '../types';
import type { Bytes } from '@polkadot/types';

import React from 'react';

import CallDisplay from './Call';
import Unknown from './Unknown';

function OpaqueCall (props: Props): React.ReactElement<Props> {
  if (!props.isDisabled) {
    return (
      <Unknown {...props} />
    );
  }

  const value = props.registry.createType('Call', (props.defaultValue.value as Bytes).toHex());

  return (
    <CallDisplay
      {...props}
      defaultValue={{ isValid: true, value }}
    />
  );
}

export default React.memo(OpaqueCall);