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

const MessageCircleDashedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.44324 1.3355C7.60176 1.31964 7.79806 1.29999 7.99999 1.29999C8.20191 1.29999 8.39821 1.31964 8.55673 1.3355L8.56964 1.3368C8.74227 1.35406 8.8741 1.36665 8.99999 1.36665C9.38659 1.36665 9.69999 1.68006 9.69999 2.06665C9.69999 2.45325 9.38659 2.76665 8.99999 2.76665C8.79806 2.76665 8.60176 2.74701 8.44324 2.73114L8.43033 2.72985C8.25771 2.71258 8.12588 2.69999 7.99999 2.69999C7.8741 2.69999 7.74227 2.71258 7.56964 2.72985L7.55673 2.73114C7.39821 2.74701 7.20191 2.76665 6.99999 2.76665C6.61339 2.76665 6.29999 2.45325 6.29999 2.06665C6.29999 1.68006 6.61339 1.36665 6.99999 1.36665C7.12588 1.36665 7.25771 1.35406 7.43033 1.3368L7.44324 1.3355ZM5.09361 2.7137C5.32536 3.02314 5.26237 3.46186 4.95294 3.69361C4.47535 4.05129 4.05129 4.47535 3.69361 4.95294C3.46186 5.26238 3.02314 5.32536 2.7137 5.09361C2.40426 4.86186 2.34128 4.42314 2.57303 4.1137C3.01062 3.52942 3.52942 3.01062 4.1137 2.57303C4.42314 2.34129 4.86186 2.40427 5.09361 2.7137ZM10.9064 2.7137C11.1381 2.40427 11.5768 2.34129 11.8863 2.57303C12.4706 3.01062 12.9894 3.52942 13.4269 4.1137C13.6587 4.42314 13.5957 4.86186 13.2863 5.09361C12.9768 5.32536 12.5381 5.26238 12.3064 4.95294C11.9487 4.47535 11.5246 4.05129 11.047 3.69361C10.7376 3.46186 10.6746 3.02314 10.9064 2.7137ZM2.06665 6.29999C2.45325 6.29999 2.76665 6.61339 2.76665 6.99999C2.76665 7.20192 2.747 7.39822 2.73114 7.55674L2.72985 7.56964C2.71258 7.74227 2.69999 7.8741 2.69999 7.99999C2.69999 8.12588 2.71258 8.25771 2.72985 8.43034L2.73114 8.44324C2.747 8.60176 2.76665 8.79806 2.76665 8.99999C2.76665 9.38659 2.45325 9.69999 2.06665 9.69999C1.68005 9.69999 1.36665 9.38659 1.36665 8.99999C1.36665 8.8741 1.35406 8.74227 1.33679 8.56964L1.3355 8.55674C1.31964 8.39822 1.29999 8.20192 1.29999 7.99999C1.29999 7.79806 1.31964 7.60176 1.3355 7.44324L1.33679 7.43034C1.35406 7.25771 1.36665 7.12588 1.36665 6.99999C1.36665 6.61339 1.68005 6.29999 2.06665 6.29999ZM13.9333 6.29999C14.3199 6.29999 14.6333 6.61339 14.6333 6.99999C14.6333 7.12588 14.6459 7.25771 14.6632 7.43034L14.6645 7.44325C14.6803 7.60177 14.7 7.79806 14.7 7.99999L14.7 8.02451C14.7 8.34276 14.7001 8.73535 14.6197 9.13727C14.5439 9.51636 14.1751 9.76221 13.796 9.68639C13.4169 9.61058 13.1711 9.2418 13.2469 8.86271C13.2978 8.60835 13.3 8.34417 13.3 7.99999C13.3 7.8741 13.2874 7.74227 13.2701 7.56964L13.2688 7.55673C13.253 7.39821 13.2333 7.20191 13.2333 6.99999C13.2333 6.61339 13.5467 6.29999 13.9333 6.29999ZM13.2863 10.9064C13.5957 11.1381 13.6587 11.5768 13.4269 11.8863C12.9893 12.4706 12.4706 12.9894 11.8863 13.4269C11.5768 13.6587 11.1381 13.5957 10.9064 13.2863C10.6746 12.9768 10.7376 12.5381 11.047 12.3064C11.5246 11.9487 11.9487 11.5246 12.3064 11.047C12.5381 10.7376 12.9768 10.6746 13.2863 10.9064ZM2.55468 11.0026C2.92144 11.1248 3.11965 11.5213 2.9974 11.888L2.44012 13.5599L4.11196 13.0026C4.47872 12.8803 4.87514 13.0785 4.9974 13.4453C5.11965 13.8121 4.92144 14.2085 4.55468 14.3307L1.55468 15.3307C1.30314 15.4146 1.02583 15.3491 0.838345 15.1616C0.650862 14.9741 0.585397 14.6968 0.669241 14.4453L1.66924 11.4453C1.79149 11.0785 2.18792 10.8803 2.55468 11.0026ZM6.31358 13.796C6.3894 13.4169 6.75818 13.1711 7.13727 13.2469C7.39162 13.2978 7.65581 13.3 7.99999 13.3C8.12588 13.3 8.25771 13.2874 8.43033 13.2701L8.44324 13.2688C8.60176 13.253 8.79806 13.2333 8.99999 13.2333C9.38659 13.2333 9.69999 13.5467 9.69999 13.9333C9.69999 14.3199 9.38659 14.6333 8.99999 14.6333C8.8741 14.6333 8.74227 14.6459 8.56964 14.6632L8.55675 14.6645C8.39823 14.6803 8.20192 14.7 7.99999 14.7L7.97547 14.7C7.65722 14.7 7.26463 14.7001 6.86271 14.6197C6.48361 14.5439 6.23776 14.1751 6.31358 13.796Z"
      fill="currentColor"
    />
  </svg>
);
export default MessageCircleDashedIcon;
