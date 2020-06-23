import AttachmentDescription from 'src/components/Attachment/AttachmentDescription';
import { isConformant } from 'test/specs/commonTests';

describe('AttachmentDescription', () => {
  isConformant(AttachmentDescription, { constructorName: 'AttachmentDescription' });
});
