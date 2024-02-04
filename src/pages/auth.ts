import { GoogleAdapter } from 'sst/node/future/auth';
import { GithubAdapter } from 'sst/node/future/auth';
import { MicrosoftAdapter } from 'sst/node/future/auth';
import { AppleAdapter } from 'sst/node/future/auth';
import { Session } from 'sst/node/future/auth';

export function loadStuff() {
    const type = Session.verify('').type;
    return { type };
}