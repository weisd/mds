// This file is part of MinIO Design System
// Copyright (c) 2024 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import * as React from "react";
import { SVGProps } from "react";

const ContainerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.45404 0.924788C8.7322 0.766667 9.04667 0.683533 9.36663 0.683533C9.6866 0.683533 10.0011 0.766667 10.2792 0.924788C10.2868 0.929102 10.2943 0.933557 10.3017 0.938152L14.5017 3.53815C14.5194 3.54911 14.5366 3.56085 14.5533 3.57334C14.7776 3.74153 15.01 4.00491 15.1686 4.32508C15.1817 4.34334 15.194 4.36239 15.2055 4.38221C15.2539 4.46565 15.2831 4.55494 15.2945 4.64497C15.3403 4.80019 15.3666 4.96408 15.3666 5.13334V9.46667C15.3666 9.79845 15.2425 10.122 15.0943 10.3728C14.9431 10.6286 14.7178 10.8923 14.4268 11.0669L14.419 11.0716L7.54592 15.0753C7.26775 15.2334 6.95326 15.3165 6.6333 15.3165C6.31334 15.3165 5.99887 15.2333 5.7207 15.0752C5.71311 15.0709 5.70561 15.0665 5.69819 15.0619L1.49819 12.4619C1.48049 12.4509 1.46329 12.4392 1.44663 12.4267C1.21045 12.2495 1.01772 11.9944 0.88544 11.7519C0.755744 11.5141 0.633301 11.1954 0.633301 10.8667V6.46667C0.633301 6.3059 0.657956 6.14476 0.704088 5.98934C0.715179 5.8889 0.748291 5.7893 0.805103 5.6977C0.821546 5.67119 0.839473 5.64616 0.858709 5.62265C1.03224 5.31131 1.29653 5.05134 1.61806 4.90686L8.45404 0.924788ZM2.0333 7.28322V10.866C2.03329 10.866 2.0333 10.8659 2.0333 10.866C2.03341 10.866 2.03463 10.886 2.04753 10.9275C2.06126 10.9716 2.08363 11.0249 2.11449 11.0815C2.17298 11.1887 2.23611 11.2616 2.27187 11.2943L5.96663 13.5815V9.72288L2.0333 7.28322ZM7.36663 9.73662V13.5595L8.6333 12.8216V9.00216L7.36663 9.73662ZM10.0333 8.1904V12.0061L11.3 11.2682V7.45594L10.0333 8.1904ZM12.7 6.64418V10.4527L13.7089 9.86496C13.7516 9.83842 13.8247 9.76935 13.889 9.66056C13.9192 9.60944 13.9406 9.5608 13.9535 9.52074C13.9654 9.48392 13.9665 9.4655 13.9666 9.46551C13.9666 9.46544 13.9666 9.46551 13.9666 9.46551L13.9666 5.90972L12.7 6.64418ZM13.4978 4.56323L9.57856 2.13701C9.51348 2.10193 9.44067 2.08353 9.36663 2.08353C9.29019 2.08353 9.21504 2.10315 9.14838 2.14049L2.57323 5.97067L6.67876 8.51714L13.4978 4.56323Z"
      fill="currentColor"
    />
  </svg>
);
export default ContainerIcon;
