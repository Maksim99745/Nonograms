const games = {
  Easy: {
    smile: {
            field: [[
                    'fully', 'fully', 'empty', 'fully', 'fully',
                    'fully', 'fully', 'empty', 'fully', 'fully',
                    'empty', 'empty', 'empty', 'empty', 'empty',
                    'fully', 'empty', 'empty', 'empty', 'fully',
                    'empty', 'fully', 'fully', 'fully', 'empty',
                    ]],
            hint: [
                      'fully', 'fully', 'empty', 'fully', 'fully',
                      'fully', 'fully', 'empty', 'fully', 'fully',
                      'empty', 'empty', 'empty', 'empty', 'empty',
                      'fully', 'empty', 'empty', 'empty', 'fully',
                      'empty', 'fully', 'fully', 'fully', 'empty',
                  ],
           },
    police: {
              field: [[
                'empty', 'empty', 'fully', 'empty', 'empty',
                'fully', 'fully', 'fully', 'fully', 'empty',
                'fully', 'empty', 'empty', 'empty', 'fully',
                'fully', 'fully', 'fully', 'fully', 'fully',
                'empty', 'fully', 'empty', 'fully', 'empty',
                ]],
              hint: [
                  'empty', 'empty', 'fully', 'empty', 'empty',
                  'fully', 'fully', 'fully', 'fully', 'empty',
                  'fully', 'empty', 'empty', 'empty', 'fully',
                  'fully', 'fully', 'fully', 'fully', 'fully',
                  'empty', 'fully', 'empty', 'fully', 'empty',
                    ],
               },
    lattice: {
              field : 
                [[
                'empty', 'fully', 'empty', 'fully', 'empty',
                'fully', 'fully', 'fully', 'fully', 'fully',
                'empty', 'fully', 'empty', 'fully', 'empty',
                'fully', 'fully', 'fully', 'fully', 'fully',
                'empty', 'fully', 'empty', 'fully', 'empty',
                ]],

              hint: [
                'empty', 'fully', 'empty', 'fully', 'empty',
                'fully', 'fully', 'fully', 'fully', 'fully',
                'empty', 'fully', 'empty', 'fully', 'empty',
                'fully', 'fully', 'fully', 'fully', 'fully',
                'empty', 'fully', 'empty', 'fully', 'empty',
              ]
            },
    plane: {
              field : [[
                        'empty', 'empty', 'fully', 'empty', 'empty',
                        'empty', 'fully', 'fully', 'fully', 'empty',
                        'fully', 'fully', 'fully', 'fully', 'fully',
                        'empty', 'empty', 'fully', 'empty', 'empty',
                        'empty', 'fully', 'fully', 'fully', 'empty',
                      ]],
              hint: [
                    'empty', 'empty', 'fully', 'empty', 'empty',
                    'empty', 'fully', 'fully', 'fully', 'empty',
                    'fully', 'fully', 'fully', 'fully', 'fully',
                    'empty', 'empty', 'fully', 'empty', 'empty',
                    'empty', 'fully', 'fully', 'fully', 'empty',
                  ]
             },
    mushroom: {
              field : 
              [[
                'empty', 'fully', 'fully', 'fully', 'empty',
                'fully', 'fully', 'fully', 'fully', 'fully',
                'empty', 'empty', 'fully', 'empty', 'empty',
                'empty', 'empty', 'fully', 'empty', 'empty',
                'empty', 'empty', 'fully', 'empty', 'empty',
              ]],
              hint: [
                'empty', 'fully', 'fully', 'fully', 'empty',
                'fully', 'fully', 'fully', 'fully', 'fully',
                'empty', 'empty', 'fully', 'empty', 'empty',
                'empty', 'empty', 'fully', 'empty', 'empty',
                'empty', 'empty', 'fully', 'empty', 'empty',
              ]
            }, 
  },
  
  Normal: {
    question: {
                field: [
                  [
                    'empty', 'empty', 'fully', 'fully', 'fully',
                    'empty', 'fully', 'fully', 'empty', 'empty',
                    'empty', 'fully', 'fully', 'empty', 'empty',
                    'empty', 'empty', 'empty', 'empty', 'empty',
                    'empty', 'empty', 'empty', 'empty', 'empty',
                  ],
                  [
                    'fully', 'fully', 'fully', 'empty', 'empty',
                    'empty', 'empty', 'fully', 'fully', 'empty',
                    'empty', 'empty', 'fully', 'fully', 'empty',
                    'empty', 'empty', 'fully', 'fully', 'empty',
                    'empty', 'fully', 'fully', 'fully', 'empty',
                  ],
                  [
                    'empty', 'empty', 'empty', 'empty', 'fully',
                    'empty', 'empty', 'empty', 'empty', 'fully',
                    'empty', 'empty', 'empty', 'empty', 'empty',
                    'empty', 'empty', 'empty', 'empty', 'fully',
                    'empty', 'empty', 'empty', 'empty', 'fully',
                  ],
                  [
                    'fully', 'fully', 'fully', 'empty', 'empty',
                    'fully', 'empty', 'empty', 'empty', 'empty',
                    'empty', 'empty', 'empty', 'empty', 'empty',
                    'fully', 'empty', 'empty', 'empty', 'empty',
                    'fully', 'empty', 'empty', 'empty', 'empty',
                  ]
                ],

                hint: [
                  'empty', 'empty', 'fully', 'fully', 'fully',  'fully', 'fully', 'fully', 'empty', 'empty',
                  'empty', 'fully', 'fully', 'empty', 'empty',  'empty', 'empty', 'fully', 'fully', 'empty',
                  'empty', 'fully', 'fully', 'empty', 'empty',  'empty', 'empty', 'fully', 'fully', 'empty',
                  'empty', 'empty', 'empty', 'empty', 'empty',  'empty', 'empty', 'fully', 'fully', 'empty',
                  'empty', 'empty', 'empty', 'empty', 'empty',  'empty', 'fully', 'fully', 'fully', 'empty',

                  'empty', 'empty', 'empty', 'empty', 'fully',  'fully', 'fully', 'fully', 'empty', 'empty',
                  'empty', 'empty', 'empty', 'empty', 'fully',  'fully', 'empty', 'empty', 'empty', 'empty',
                  'empty', 'empty', 'empty', 'empty', 'empty',  'empty', 'empty', 'empty', 'empty', 'empty',
                  'empty', 'empty', 'empty', 'empty', 'fully',  'fully', 'empty', 'empty', 'empty', 'empty',
                  'empty', 'empty', 'empty', 'empty', 'fully',  'fully', 'empty', 'empty', 'empty', 'empty',
                ]
              },
    house: {
          field: [
            [
              'empty', 'empty', 'empty', 'empty', 'fully',
              'empty', 'empty', 'empty', 'fully', 'fully',
              'empty', 'empty', 'fully', 'fully', 'fully',
              'empty', 'fully', 'fully', 'fully', 'empty',
              'fully', 'fully', 'fully', 'fully', 'empty',
            ],
            [
              'fully', 'empty', 'empty', 'empty', 'empty',
              'fully', 'fully', 'empty', 'empty', 'empty',
              'fully', 'fully', 'fully', 'empty', 'empty',
              'empty', 'fully', 'fully', 'fully', 'empty',
              'empty', 'fully', 'fully', 'fully', 'fully',
            ],
            [
              'fully', 'fully', 'fully', 'fully', 'empty',
              'fully', 'fully', 'fully', 'fully', 'empty',
              'fully', 'fully', 'fully', 'fully', 'fully',
              'fully', 'fully', 'fully', 'fully', 'fully',
              'fully', 'fully', 'fully', 'fully', 'fully',
            ],
            [
              'empty', 'fully', 'fully', 'fully', 'fully',
              'empty', 'fully', 'fully', 'fully', 'fully',
              'fully', 'fully', 'fully', 'fully', 'fully',
              'fully', 'fully', 'fully', 'fully', 'fully',
              'fully', 'fully', 'fully', 'fully', 'fully',
            ]
          ],
        hint: [
            'empty', 'empty', 'empty', 'empty', 'fully', 'fully', 'empty', 'empty', 'empty', 'empty',
            'empty', 'empty', 'empty', 'fully', 'fully', 'fully', 'fully', 'empty', 'empty', 'empty',
            'empty', 'empty', 'fully', 'fully', 'fully', 'fully', 'fully', 'fully', 'empty', 'empty',
            'empty', 'fully', 'fully', 'fully', 'empty', 'empty', 'fully', 'fully', 'fully', 'empty',
            'fully', 'fully', 'fully', 'fully', 'empty', 'empty', 'fully', 'fully', 'fully', 'fully',

            'fully', 'fully', 'fully', 'fully', 'empty', 'empty', 'fully', 'fully', 'fully', 'fully',
            'fully', 'fully', 'fully', 'fully', 'empty', 'empty', 'fully', 'fully', 'fully', 'fully',
            'fully', 'fully', 'fully', 'fully', 'fully', 'fully', 'fully', 'fully', 'fully', 'fully',
            'fully', 'fully', 'fully', 'fully', 'fully', 'fully', 'fully', 'fully', 'fully', 'fully',
            'fully', 'fully', 'fully', 'fully', 'fully', 'fully', 'fully', 'fully', 'fully', 'fully',
        ]
    },
    melody: {
          field : [
              [
                'empty', 'empty', 'empty', 'empty', 'empty',
                'empty', 'empty', 'empty', 'fully', 'fully',
                'empty', 'empty', 'empty', 'fully', 'empty',
                'empty', 'empty', 'empty', 'fully', 'fully',
                'empty', 'empty', 'empty', 'fully', 'empty',
              ],
              [
                'empty', 'fully', 'fully', 'fully', 'fully',
                'fully', 'empty', 'empty', 'empty', 'fully',
                'empty', 'empty', 'fully', 'fully', 'fully',
                'fully', 'fully', 'empty', 'empty', 'fully',
                'empty', 'empty', 'empty', 'empty', 'fully',
              ],
              [
                'empty', 'empty', 'empty', 'fully', 'empty',
                'empty', 'fully', 'fully', 'fully', 'empty',
                'fully', 'fully', 'fully', 'fully', 'empty',
                'fully', 'fully', 'fully', 'fully', 'empty',
                'empty', 'fully', 'fully', 'empty', 'empty',
              ],
              [
                'empty', 'empty', 'fully', 'fully', 'fully',
                'empty', 'fully', 'fully', 'fully', 'fully',
                'empty', 'fully', 'fully', 'fully', 'fully',
                'empty', 'empty', 'fully', 'fully', 'empty',
                'empty', 'empty', 'empty', 'empty', 'empty',
              ]
            ],
          hint: [
              'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'fully', 'fully', 'fully', 'fully',
              'empty', 'empty', 'empty', 'fully', 'fully', 'fully', 'empty', 'empty', 'empty', 'fully',
              'empty', 'empty', 'empty', 'fully', 'empty', 'empty', 'empty', 'fully', 'fully', 'fully',
              'empty', 'empty', 'empty', 'fully', 'fully', 'fully', 'fully', 'empty', 'empty', 'fully',
              'empty', 'empty', 'empty', 'fully', 'empty', 'empty', 'empty', 'empty', 'empty', 'fully',
              'empty', 'empty', 'empty', 'fully', 'empty', 'empty', 'empty', 'fully', 'fully', 'fully',
              'empty', 'fully', 'fully', 'fully', 'empty', 'empty', 'fully', 'fully', 'fully', 'fully',
              'fully', 'fully', 'fully', 'fully', 'empty', 'empty', 'fully', 'fully', 'fully', 'fully',
              'fully', 'fully', 'fully', 'fully', 'empty', 'empty', 'empty', 'fully', 'fully', 'empty',
              'empty', 'fully', 'fully', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty',
          ]
          },
    tv: {
         field : [
          [
            'empty', 'empty', 'fully', 'empty', 'empty',
            'empty', 'empty', 'empty', 'fully', 'empty',
            'fully', 'fully', 'fully', 'fully', 'fully',
            'fully', 'empty', 'fully', 'fully', 'empty',
            'fully', 'fully', 'fully', 'empty', 'empty',
          ],
          [
            'empty', 'empty', 'fully', 'empty', 'empty',
            'empty', 'fully', 'empty', 'empty', 'empty',
            'fully', 'fully', 'fully', 'fully', 'fully',
            'empty', 'empty', 'empty', 'fully', 'fully',
            'empty', 'empty', 'empty', 'empty', 'fully',
          ],
          [
            'fully', 'empty', 'fully', 'empty', 'empty',
            'fully', 'fully', 'fully', 'empty', 'empty',
            'fully', 'fully', 'fully', 'fully', 'empty',
            'fully', 'fully', 'fully', 'fully', 'fully',
            'empty', 'fully', 'empty', 'empty', 'empty',
          ],
          [
            'empty', 'empty', 'empty', 'empty', 'fully',
            'empty', 'empty', 'empty', 'empty', 'fully',
            'empty', 'empty', 'empty', 'fully', 'fully',
            'fully', 'fully', 'fully', 'fully', 'fully',
            'empty', 'empty', 'empty', 'fully', 'empty',
          ]
        ],
        hint: [
          'empty', 'empty', 'fully', 'empty', 'empty', 'empty', 'empty', 'fully', 'empty', 'empty',
          'empty', 'empty', 'empty', 'fully', 'empty', 'empty', 'fully', 'empty', 'empty', 'empty',
          'fully', 'fully', 'fully', 'fully', 'fully', 'fully', 'fully', 'fully', 'fully', 'fully',
          'fully', 'empty', 'fully', 'fully', 'empty', 'empty', 'empty', 'empty', 'fully', 'fully',
          'fully', 'fully', 'fully', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'fully',
          'fully', 'empty', 'fully', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'fully',
          'fully', 'fully', 'fully', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'fully',
          'fully', 'fully', 'fully', 'fully', 'empty', 'empty', 'empty', 'empty', 'fully', 'fully',
          'fully', 'fully', 'fully', 'fully', 'fully', 'fully', 'fully', 'fully', 'fully', 'fully',
          'empty', 'fully', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'fully', 'empty',
        ]
        },
    leaf: {
          field: [
                  [
                    'empty', 'empty', 'empty', 'empty', 'fully',
                    'empty', 'empty', 'empty', 'fully', 'empty',
                    'empty', 'empty', 'fully', 'fully', 'empty',
                    'empty', 'fully', 'empty', 'fully', 'empty',
                    'empty', 'fully', 'empty', 'fully', 'empty',
                  ],
                  [
                    'fully', 'fully', 'fully', 'fully', 'fully',
                    'fully', 'empty', 'fully', 'empty', 'fully',
                    'fully', 'empty', 'fully', 'fully', 'fully',
                    'fully', 'fully', 'empty', 'empty', 'fully',
                    'fully', 'fully', 'fully', 'fully', 'fully',
                  ],
                  [
                    'empty', 'fully', 'empty', 'fully', 'fully',
                    'empty', 'fully', 'fully', 'fully', 'fully',
                    'empty', 'empty', 'fully', 'empty', 'empty',
                    'empty', 'fully', 'empty', 'fully', 'fully',
                    'fully', 'fully', 'empty', 'empty', 'empty',
                  ],
                  [
                    'empty', 'empty', 'empty', 'fully', 'empty',
                    'fully', 'fully', 'fully', 'fully', 'empty',
                    'empty', 'empty', 'fully', 'empty', 'empty',
                    'fully', 'fully', 'empty', 'empty', 'empty',
                    'empty', 'empty', 'empty', 'empty', 'empty',
                  ]
                ],
          hint: [
                  'empty', 'empty', 'empty', 'empty', 'fully', 'fully', 'fully', 'fully', 'fully', 'fully',
                  'empty', 'empty', 'empty', 'fully', 'empty', 'fully', 'empty', 'fully', 'empty', 'fully',
                  'empty', 'empty', 'fully', 'fully', 'empty', 'fully', 'empty', 'fully', 'fully', 'fully',
                  'empty', 'fully', 'empty', 'fully', 'empty', 'fully', 'fully', 'empty', 'empty', 'fully',
                  'empty', 'fully', 'empty', 'fully', 'empty', 'fully', 'fully', 'fully', 'fully', 'fully',

                  'empty', 'fully', 'empty', 'fully', 'fully', 'empty', 'empty', 'empty', 'fully', 'empty',
                  'empty', 'fully', 'fully', 'fully', 'fully', 'fully', 'fully', 'fully', 'fully', 'empty',
                  'empty', 'empty', 'fully', 'empty', 'empty', 'empty', 'empty', 'fully', 'empty', 'empty',
                  'empty', 'fully', 'empty', 'fully', 'fully', 'fully', 'fully', 'empty', 'empty', 'empty',
                  'fully', 'fully', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty',
                 ]
         }

  },

  Hard: {
    mouse: {
      field: [
        [
          'empty', 'empty', 'empty', 'empty', 'empty',
          'empty', 'empty', 'empty', 'empty', 'empty',
          'empty', 'empty', 'empty', 'fully', 'fully',
          'empty', 'fully', 'fully', 'empty', 'fully',
          'fully', 'fully', 'empty', 'empty', 'empty',
        ],
        [
          'empty', 'empty', 'empty', 'empty', 'empty',
          'fully', 'fully', 'fully', 'fully', 'empty',
          'fully', 'empty', 'empty', 'fully', 'empty',
          'empty', 'empty', 'fully', 'fully', 'empty',
          'empty', 'empty', 'fully', 'empty', 'empty',
        ],
        [
          'empty', 'empty', 'fully', 'fully', 'fully',
          'empty', 'fully', 'fully', 'empty', 'fully',
          'empty', 'fully', 'empty', 'fully', 'empty',
          'empty', 'fully', 'empty', 'empty', 'empty',
          'empty', 'fully', 'fully', 'empty', 'empty',
        ],
        [
          'empty', 'fully', 'fully', 'fully', 'fully',
          'empty', 'empty', 'empty', 'empty', 'fully',
          'empty', 'empty', 'empty', 'empty', 'empty',
          'empty', 'empty', 'empty', 'empty', 'empty',
          'empty', 'empty', 'empty', 'fully', 'fully',
        ],
        [
          'empty', 'empty', 'fully', 'fully', 'empty',
          'fully', 'empty', 'empty', 'fully', 'fully',
          'fully', 'empty', 'empty', 'empty', 'fully',
          'fully', 'fully', 'empty', 'empty', 'empty',
          'fully', 'fully', 'empty', 'empty', 'empty',
        ],
        [
          'empty', 'empty', 'fully', 'fully', 'empty',
          'empty', 'empty', 'empty', 'fully', 'fully',
          'fully', 'fully', 'empty', 'empty', 'fully',
          'empty', 'fully', 'fully', 'empty', 'fully',
          'empty', 'empty', 'fully', 'fully', 'fully',
        ],
        [
          'empty', 'empty', 'empty', 'fully', 'empty',
          'empty', 'empty', 'empty', 'empty', 'empty',
          'empty', 'empty', 'empty', 'empty', 'empty',
          'empty', 'empty', 'empty', 'empty', 'empty',
          'empty', 'empty', 'empty', 'fully', 'fully',
        ],
        [
          'fully', 'empty', 'empty', 'fully', 'fully',
          'fully', 'empty', 'empty', 'fully', 'empty',
          'empty', 'fully', 'empty', 'fully', 'empty',
          'fully', 'fully', 'fully', 'fully', 'fully',
          'fully', 'empty', 'fully', 'fully', 'empty',
        ],
        [
          'empty', 'empty', 'empty', 'fully', 'fully',
          'empty', 'empty', 'empty', 'fully', 'empty',
          'empty', 'empty', 'empty', 'fully', 'empty',
          'empty', 'empty', 'fully', 'fully', 'empty',
          'fully', 'fully', 'fully', 'empty', 'empty',
        ]
       ],
      hint: [
          'empty', 'empty', 'empty', 'empty', 'empty',  'empty', 'empty', 'empty', 'empty', 'empty',  'empty', 'empty', 'fully', 'fully', 'fully',
          'empty', 'empty', 'empty', 'empty', 'empty',  'fully', 'fully', 'fully', 'fully', 'empty',  'empty', 'fully', 'fully', 'empty', 'fully',
          'empty', 'empty', 'empty', 'fully', 'fully',  'fully', 'empty', 'empty', 'fully', 'empty',  'empty', 'fully', 'empty', 'fully', 'empty',
          'empty', 'fully', 'fully', 'empty', 'fully',  'empty', 'empty', 'fully', 'fully', 'empty',  'empty', 'fully', 'empty', 'empty', 'empty',
          'fully', 'fully', 'empty', 'empty', 'empty',  'empty', 'empty', 'fully', 'empty', 'empty',  'empty', 'fully', 'fully', 'empty', 'empty',

          'empty', 'fully', 'fully', 'fully', 'fully',  'empty', 'empty', 'fully', 'fully', 'empty',  'empty', 'empty', 'fully', 'fully', 'empty',
          'empty', 'empty', 'empty', 'empty', 'fully',  'fully', 'empty', 'empty', 'fully', 'fully',  'empty', 'empty', 'empty', 'fully', 'fully',
          'empty', 'empty', 'empty', 'empty', 'empty',  'fully', 'empty', 'empty', 'empty', 'fully',  'fully', 'fully', 'empty', 'empty', 'fully',
          'empty', 'empty', 'empty', 'empty', 'empty',  'fully', 'fully', 'empty', 'empty', 'empty',  'empty', 'fully', 'fully', 'empty', 'fully',
          'empty', 'empty', 'empty', 'fully', 'fully',  'fully', 'fully', 'empty', 'empty', 'empty',  'empty', 'empty', 'fully', 'fully', 'fully',

          'empty', 'empty', 'empty', 'fully', 'empty',  'fully', 'empty', 'empty', 'fully', 'fully',  'empty', 'empty', 'empty', 'fully', 'fully',
          'empty', 'empty', 'empty', 'empty', 'empty',  'fully', 'empty', 'empty', 'fully', 'empty',  'empty', 'empty', 'empty', 'fully', 'empty',
          'empty', 'empty', 'empty', 'empty', 'empty',  'empty', 'fully', 'empty', 'fully', 'empty',  'empty', 'empty', 'empty', 'fully', 'empty',
          'empty', 'empty', 'empty', 'empty', 'empty',  'fully', 'fully', 'fully', 'fully', 'fully',  'empty', 'empty', 'fully', 'fully', 'empty',
          'empty', 'empty', 'empty', 'fully', 'fully',  'fully', 'empty', 'fully', 'fully', 'empty',  'fully', 'fully', 'fully', 'empty', 'empty',
      ],
    },
  duck: {
        field: [
          [
            'empty', 'empty', 'empty', 'empty', 'empty',
            'empty', 'empty', 'empty', 'empty', 'empty',
            'empty', 'empty', 'empty', 'empty', 'empty',
            'empty', 'empty', 'empty', 'empty', 'empty',
            'empty', 'empty', 'empty', 'empty', 'empty',
          ],
          [
            'empty', 'empty', 'empty', 'empty', 'fully',
            'empty', 'empty', 'empty', 'fully', 'fully',
            'empty', 'empty', 'fully', 'fully', 'fully',
            'empty', 'empty', 'fully', 'fully', 'fully',
            'empty', 'empty', 'empty', 'fully', 'fully',
          ],
          [
            'fully', 'fully', 'empty', 'empty', 'empty',
            'fully', 'fully', 'fully', 'empty', 'empty',
            'fully', 'empty', 'fully', 'fully', 'fully',
            'fully', 'fully', 'fully', 'fully', 'empty',
            'fully', 'fully', 'fully', 'empty', 'empty',
          ],
          [
            'empty', 'empty', 'empty', 'empty', 'empty',
            'empty', 'empty', 'empty', 'empty', 'empty',
            'fully', 'empty', 'empty', 'empty', 'empty',
            'fully', 'fully', 'fully', 'empty', 'empty',
            'fully', 'fully', 'fully', 'fully', 'fully',
          ],
          [
            'empty', 'empty', 'empty', 'empty', 'fully',
            'empty', 'empty', 'empty', 'fully', 'fully',
            'empty', 'fully', 'fully', 'fully', 'fully',
            'fully', 'fully', 'fully', 'empty', 'empty',
            'fully', 'fully', 'empty', 'fully', 'fully',
          ],
          [
            'fully', 'fully', 'empty', 'empty', 'empty',
            'fully', 'fully', 'fully', 'empty', 'empty',
            'fully', 'fully', 'fully', 'fully', 'empty',
            'empty', 'fully', 'fully', 'fully', 'empty',
            'fully', 'empty', 'fully', 'fully', 'empty',
          ],
          [
            'empty', 'fully', 'fully', 'fully', 'fully',
            'empty', 'fully', 'fully', 'fully', 'fully',
            'empty', 'empty', 'fully', 'fully', 'fully',
            'empty', 'empty', 'empty', 'empty', 'fully',
            'empty', 'empty', 'empty', 'empty', 'empty',
          ],
          [
            'fully', 'empty', 'fully', 'fully', 'fully',
            'fully', 'fully', 'fully', 'fully', 'empty',
            'fully', 'fully', 'fully', 'fully', 'fully',
            'fully', 'empty', 'fully', 'fully', 'fully',
            'empty', 'fully', 'fully', 'fully', 'fully',
          ],
          [
            'fully', 'empty', 'fully', 'fully', 'empty',
            'empty', 'fully', 'fully', 'empty', 'empty',
            'fully', 'fully', 'empty', 'empty', 'empty',
            'empty', 'empty', 'empty', 'empty', 'empty',
            'fully', 'fully', 'empty', 'empty', 'empty',
          ]
         ],
         hint: [
            'empty', 'empty', 'empty', 'empty', 'empty',  'empty', 'empty', 'empty', 'empty', 'fully',  'fully', 'fully', 'empty', 'empty', 'empty',
            'empty', 'empty', 'empty', 'empty', 'empty',  'empty', 'empty', 'empty', 'fully', 'fully',  'fully', 'fully', 'fully', 'empty', 'empty',
            'empty', 'empty', 'empty', 'empty', 'empty',  'empty', 'empty', 'fully', 'fully', 'fully',  'fully', 'empty', 'fully', 'fully', 'fully',
            'empty', 'empty', 'empty', 'empty', 'empty',  'empty', 'empty', 'fully', 'fully', 'fully',  'fully', 'fully', 'fully', 'fully', 'empty',
            'empty', 'empty', 'empty', 'empty', 'empty',  'empty', 'empty', 'empty', 'fully', 'fully',  'fully', 'fully', 'fully', 'empty', 'empty',

            
            'empty', 'empty', 'empty', 'empty', 'empty',  'empty', 'empty', 'empty', 'empty', 'fully',  'fully', 'fully', 'empty', 'empty', 'empty',
            'empty', 'empty', 'empty', 'empty', 'empty',  'empty', 'empty', 'empty', 'fully', 'fully',  'fully', 'fully', 'fully', 'empty', 'empty',
            'fully', 'empty', 'empty', 'empty', 'empty',  'empty', 'fully', 'fully', 'fully', 'fully',  'fully', 'fully', 'fully', 'fully', 'empty',
            'fully', 'fully', 'fully', 'empty', 'empty',  'fully', 'fully', 'fully', 'empty', 'empty',  'empty', 'fully', 'fully', 'fully', 'empty',
            'fully', 'fully', 'fully', 'fully', 'fully',  'fully', 'fully', 'empty', 'fully', 'fully',  'fully', 'empty', 'fully', 'fully', 'empty',
            
          
            'empty', 'fully', 'fully', 'fully', 'fully',  'fully', 'empty', 'fully', 'fully', 'fully',  'fully', 'empty', 'fully', 'fully', 'empty',
            'empty', 'fully', 'fully', 'fully', 'fully',  'fully', 'fully', 'fully', 'fully', 'empty',  'empty', 'fully', 'fully', 'empty', 'empty',
            'empty', 'empty', 'fully', 'fully', 'fully',  'fully', 'fully', 'fully', 'fully', 'fully',  'fully', 'fully', 'empty', 'empty', 'empty',
            'empty', 'empty', 'empty', 'empty', 'fully',  'fully', 'empty', 'fully', 'fully', 'fully',  'empty', 'empty', 'empty', 'empty', 'empty',
            'empty', 'empty', 'empty', 'empty', 'empty',  'empty', 'fully', 'fully', 'fully', 'fully',  'fully', 'fully', 'empty', 'empty', 'empty',
             ],
        },

        deer: {
          field: [
            [
              'fully', 'fully', 'empty', 'fully', 'fully',
              'fully', 'fully', 'empty', 'fully', 'fully',
              'empty', 'fully', 'fully', 'fully', 'fully',
              'empty', 'empty', 'fully', 'fully', 'fully',
              'empty', 'empty', 'empty', 'empty', 'fully',
            ],
            [
              'empty', 'empty', 'empty', 'empty', 'empty',
              'empty', 'fully', 'empty', 'empty', 'fully',
              'empty', 'fully', 'empty', 'empty', 'fully',
              'fully', 'fully', 'empty', 'empty', 'empty',
              'fully', 'empty', 'fully', 'fully', 'fully',
            ],
            [
              'empty', 'fully', 'fully', 'empty', 'fully',
              'empty', 'fully', 'fully', 'empty', 'fully',
              'empty', 'fully', 'fully', 'empty', 'fully',
              'fully', 'fully', 'fully', 'fully', 'fully',
              'fully', 'fully', 'empty', 'empty', 'empty',
            ],
            [
              'empty', 'empty', 'empty', 'empty', 'empty',
              'empty', 'empty', 'empty', 'empty', 'empty',
              'empty', 'empty', 'empty', 'empty', 'fully',
              'empty', 'empty', 'empty', 'fully', 'fully',
              'empty', 'empty', 'fully', 'fully', 'fully',
            ],
            [
              'empty', 'fully', 'fully', 'fully', 'fully',
              'fully', 'empty', 'fully', 'empty', 'fully',
              'fully', 'fully', 'fully', 'fully', 'fully',
              'fully', 'fully', 'fully', 'fully', 'fully',
              'fully', 'fully', 'fully', 'fully', 'fully',
            ],
            [
              'fully', 'fully', 'fully', 'empty', 'empty',
              'fully', 'fully', 'fully', 'fully', 'empty',
              'fully', 'fully', 'fully', 'fully', 'fully',
              'fully', 'fully', 'fully', 'fully', 'fully',
              'fully', 'fully', 'fully', 'fully', 'fully',
            ],
            [
              'empty', 'fully', 'fully', 'fully', 'fully',
              'empty', 'fully', 'empty', 'fully', 'fully',
              'empty', 'fully', 'fully', 'fully', 'fully',
              'empty', 'empty', 'fully', 'fully', 'fully',
              'empty', 'empty', 'empty', 'empty', 'empty',
            ],
            [
              'fully', 'fully', 'fully', 'fully', 'empty',
              'fully', 'empty', 'empty', 'empty', 'empty',
              'fully', 'empty', 'empty', 'empty', 'empty',
              'empty', 'empty', 'empty', 'empty', 'fully',
              'empty', 'empty', 'empty', 'empty', 'fully',
            ],
            [
              'fully', 'fully', 'fully', 'fully', 'fully',
              'fully', 'fully', 'fully', 'fully', 'fully',
              'fully', 'fully', 'fully', 'fully', 'fully',
              'fully', 'fully', 'fully', 'fully', 'fully',
              'fully', 'fully', 'fully', 'fully', 'fully',
            ],
           ],
          hint: [

              'fully', 'fully', 'empty', 'fully', 'fully',  'empty', 'empty', 'empty', 'empty', 'empty',  'empty', 'fully', 'fully', 'empty', 'fully',
              'fully', 'fully', 'empty', 'fully', 'fully',  'empty', 'fully', 'empty', 'empty', 'fully',  'empty', 'fully', 'fully', 'empty', 'fully',
              'empty', 'fully', 'fully', 'fully', 'fully',  'empty', 'fully', 'empty', 'empty', 'fully',  'empty', 'fully', 'fully', 'empty', 'fully',
              'empty', 'empty', 'fully', 'fully', 'fully',  'fully', 'fully', 'empty', 'empty', 'empty',  'fully', 'fully', 'fully', 'fully', 'fully',
              'empty', 'empty', 'empty', 'empty', 'fully',  'fully', 'empty', 'fully', 'fully', 'fully',  'fully', 'fully', 'empty', 'empty', 'empty',


              'empty', 'empty', 'empty', 'empty', 'empty',  'empty', 'fully', 'fully', 'fully', 'fully',  'fully', 'fully', 'fully', 'empty', 'empty',
              'empty', 'empty', 'empty', 'empty', 'empty',  'fully', 'empty', 'fully', 'empty', 'fully',  'fully', 'fully', 'fully', 'fully', 'empty',
              'empty', 'empty', 'empty', 'empty', 'fully',  'fully', 'fully', 'fully', 'fully', 'fully',  'fully', 'fully', 'fully', 'fully', 'fully',
              'empty', 'empty', 'empty', 'fully', 'fully',  'fully', 'fully', 'fully', 'fully', 'fully',  'fully', 'fully', 'fully', 'fully', 'fully',
              'empty', 'empty', 'fully', 'fully', 'fully',   'fully', 'fully', 'fully', 'fully', 'fully', 'fully', 'fully', 'fully', 'fully', 'fully',


              'empty', 'fully', 'fully', 'fully', 'fully',  'fully', 'fully', 'fully', 'fully', 'empty',  'fully', 'fully', 'fully', 'fully', 'fully',
              'empty', 'fully', 'empty', 'fully', 'fully',  'fully', 'empty', 'empty', 'empty', 'empty',  'fully', 'fully', 'fully', 'fully', 'fully',
              'empty', 'fully', 'fully', 'fully', 'fully',  'fully', 'empty', 'empty', 'empty', 'empty',  'fully', 'fully', 'fully', 'fully', 'fully',
              'empty', 'empty', 'fully', 'fully', 'fully',  'empty', 'empty', 'empty', 'empty', 'fully',  'fully', 'fully', 'fully', 'fully', 'fully',
              'empty', 'empty', 'empty', 'empty', 'empty',  'empty', 'empty', 'empty', 'empty', 'fully',  'fully', 'fully', 'fully', 'fully', 'fully',
            
          ],
          },
          
          flowers: {
            field: [
              [
                  'empty', 'empty', 'fully', 'empty', 'fully',
                  'empty', 'fully', 'fully', 'empty', 'fully',
                  'empty', 'empty', 'empty', 'fully', 'empty',
                  'empty', 'fully', 'fully', 'empty', 'fully',
                  'empty', 'empty', 'fully', 'empty', 'fully',
              ],
              [
                  'empty', 'empty', 'empty', 'empty', 'empty',
                  'fully', 'empty', 'empty', 'empty', 'empty',
                  'empty', 'empty', 'empty', 'empty', 'empty',
                  'fully', 'empty', 'empty', 'empty', 'empty',
                  'empty', 'fully', 'empty', 'empty', 'empty',
              ],
              [
                  'empty', 'empty', 'empty', 'empty', 'empty',
                  'empty', 'fully', 'empty', 'fully', 'empty',
                  'fully', 'fully', 'empty', 'fully', 'fully',
                  'empty', 'empty', 'fully', 'empty', 'empty',
                  'fully', 'fully', 'empty', 'fully', 'fully',
              ],
              [
                  'empty', 'empty', 'empty', 'empty', 'empty',
                  'empty', 'empty', 'empty', 'empty', 'empty',
                  'empty', 'empty', 'empty', 'empty', 'empty',
                  'empty', 'empty', 'empty', 'empty', 'empty',
                  'empty', 'empty', 'empty', 'empty', 'empty',
              ],
              [
                  'empty', 'fully', 'empty', 'empty', 'fully',
                  'empty', 'fully', 'empty', 'fully', 'empty',
                  'fully', 'fully', 'fully', 'fully', 'fully',
                  'fully', 'fully', 'fully', 'empty', 'fully',
                  'fully', 'fully', 'fully', 'empty', 'fully',
              ],
              [
                  'empty', 'fully', 'empty', 'fully', 'empty',
                  'empty', 'empty', 'empty', 'empty', 'empty',
                  'empty', 'empty', 'empty', 'empty', 'empty',
                  'empty', 'empty', 'empty', 'empty', 'empty',
                  'empty', 'empty', 'empty', 'empty', 'empty',
              ],
              [
                  'empty', 'empty', 'empty', 'empty', 'fully',
                  'empty', 'empty', 'empty', 'fully', 'fully',
                  'empty', 'empty', 'empty', 'fully', 'fully',
                  'empty', 'empty', 'empty', 'empty', 'fully',
                  'empty', 'empty', 'empty', 'empty', 'empty',
              ],
              [
                  'fully', 'fully', 'fully', 'fully', 'empty',
                  'fully', 'fully', 'fully', 'fully', 'fully',
                  'fully', 'fully', 'fully', 'fully', 'fully',
                  'fully', 'fully', 'fully', 'fully', 'empty',
                  'fully', 'fully', 'fully', 'fully', 'fully',
              ],
              [
                  'fully', 'empty', 'empty', 'empty', 'empty',
                  'empty', 'fully', 'empty', 'empty', 'empty',
                  'empty', 'fully', 'empty', 'empty', 'empty',
                  'fully', 'empty', 'empty', 'empty', 'empty',
                  'empty', 'empty', 'empty', 'empty', 'empty',
              ],
          ],
          hint: [
            'empty', 'empty', 'fully', 'empty', 'fully',  'empty', 'empty', 'empty', 'empty', 'empty',  'empty', 'empty', 'empty', 'empty', 'empty',
            'empty', 'fully', 'fully', 'empty', 'fully',  'fully', 'empty', 'empty', 'empty', 'empty',  'empty', 'fully', 'empty', 'fully', 'empty',
            'empty', 'empty', 'empty', 'fully', 'empty',  'empty', 'empty', 'empty', 'empty', 'empty',  'fully', 'fully', 'empty', 'fully', 'fully',
            'empty', 'fully', 'fully', 'empty', 'fully',  'fully', 'empty', 'empty', 'empty', 'empty',  'empty', 'empty', 'fully', 'empty', 'empty',
            'empty', 'empty', 'fully', 'empty', 'fully',  'empty', 'fully', 'empty', 'empty', 'empty',  'fully', 'fully', 'empty', 'fully', 'fully',


            'empty', 'empty', 'empty', 'empty', 'empty',  'empty', 'fully', 'empty', 'empty', 'fully',  'empty', 'fully', 'empty', 'fully', 'empty',
            'empty', 'empty', 'empty', 'empty', 'empty',  'empty', 'fully', 'empty', 'fully', 'empty',  'empty', 'empty', 'empty', 'empty', 'empty',
            'empty', 'empty', 'empty', 'empty', 'empty',  'fully', 'fully', 'fully', 'fully', 'fully',  'empty', 'empty', 'empty', 'empty', 'empty',
            'empty', 'empty', 'empty', 'empty', 'empty',  'fully', 'fully', 'fully', 'empty', 'fully',  'empty', 'empty', 'empty', 'empty', 'empty',
            'empty', 'empty', 'empty', 'empty', 'empty',  'fully', 'fully', 'fully', 'empty', 'fully',  'empty', 'empty', 'empty', 'empty', 'empty',
            
            'empty', 'empty', 'empty', 'empty', 'fully',  'fully', 'fully', 'fully', 'fully', 'empty',  'fully', 'empty', 'empty', 'empty', 'empty',
            'empty', 'empty', 'empty', 'fully', 'fully',  'fully', 'fully', 'fully', 'fully', 'fully',  'empty', 'fully', 'empty', 'empty', 'empty',
            'empty', 'empty', 'empty', 'fully', 'fully',  'fully', 'fully', 'fully', 'fully', 'fully',  'empty', 'fully', 'empty', 'empty', 'empty',
            'empty', 'empty', 'empty', 'empty', 'fully',  'fully', 'fully', 'fully', 'fully', 'empty',  'fully', 'empty', 'empty', 'empty', 'empty',
            'empty', 'empty', 'empty', 'empty', 'empty',  'fully', 'fully', 'fully', 'fully', 'fully',  'empty', 'empty', 'empty', 'empty', 'empty',
             ]




            },

            castle: {
              field: [
                [
                  'empty', 'empty', 'empty', 'empty', 'empty',
                  'empty', 'empty', 'empty', 'empty', 'empty',
                  'empty', 'empty', 'empty', 'empty', 'empty',
                  'fully', 'fully', 'empty', 'fully', 'fully',
                  'fully', 'fully', 'fully', 'fully', 'fully',
                ],
                [
                  'empty', 'fully', 'empty', 'empty', 'empty',
                  'empty', 'fully', 'fully', 'empty', 'empty',
                  'empty', 'fully', 'fully', 'fully', 'empty',
                  'empty', 'fully', 'empty', 'empty', 'empty',
                  'empty', 'fully', 'empty', 'empty', 'empty',
                ],
                [
                  'empty', 'empty', 'empty', 'empty', 'empty',
                  'empty', 'empty', 'empty', 'empty', 'empty',
                  'empty', 'empty', 'empty', 'empty', 'empty',
                  'fully', 'fully', 'empty', 'fully', 'fully',
                  'fully', 'fully', 'fully', 'fully', 'fully',
                ],
                [
                  'fully', 'empty', 'empty', 'empty', 'fully',
                  'fully', 'empty', 'fully', 'empty', 'fully',
                  'fully', 'empty', 'fully', 'empty', 'fully',
                  'fully', 'empty', 'empty', 'empty', 'empty',
                  'fully', 'empty', 'empty', 'fully', 'empty',
                ],
                [
                  'empty', 'fully', 'empty', 'empty', 'empty',
                  'empty', 'fully', 'empty', 'empty', 'empty',
                  'fully', 'fully', 'fully', 'fully', 'fully',
                  'empty', 'empty', 'empty', 'empty', 'empty',
                  'empty', 'empty', 'empty', 'empty', 'empty',
                ],
                [
                  'fully', 'empty', 'empty', 'empty', 'fully',
                  'fully', 'empty', 'fully', 'empty', 'fully',
                  'fully', 'empty', 'fully', 'empty', 'fully',
                  'empty', 'empty', 'empty', 'empty', 'fully',
                  'empty', 'fully', 'empty', 'empty', 'fully',
                ],
                [
                  'fully', 'empty', 'fully', 'fully', 'fully',
                  'fully', 'empty', 'empty', 'fully', 'empty',
                  'fully', 'empty', 'empty', 'fully', 'empty',
                  'fully', 'empty', 'empty', 'empty', 'empty',
                  'fully', 'fully', 'fully', 'fully', 'fully',
                ],
                [
                  'empty', 'empty', 'fully', 'empty', 'empty',
                  'empty', 'fully', 'fully', 'fully', 'empty',
                  'empty', 'fully', 'fully', 'fully', 'empty',
                  'empty', 'fully', 'fully', 'fully', 'empty',
                  'fully', 'fully', 'fully', 'fully', 'fully',
                ],
                [
                  'fully', 'fully', 'fully', 'empty', 'fully',
                  'empty', 'fully', 'empty', 'empty', 'fully',
                  'empty', 'fully', 'empty', 'empty', 'fully',
                  'empty', 'fully', 'empty', 'empty', 'fully',
                  'fully', 'fully', 'fully', 'fully', 'fully',
                ]
               ],
              hint: [
                  'empty', 'empty', 'empty', 'empty', 'empty',  'empty', 'fully', 'empty', 'empty', 'empty',  'empty', 'empty', 'empty', 'empty', 'empty',
                  'empty', 'empty', 'empty', 'empty', 'empty',  'empty', 'fully', 'fully', 'empty', 'empty',  'empty', 'empty', 'empty', 'empty', 'empty',
                  'empty', 'empty', 'empty', 'empty', 'empty',  'empty', 'fully', 'fully', 'fully', 'empty',  'empty', 'empty', 'empty', 'empty', 'empty',
                  'fully', 'fully', 'empty', 'fully', 'fully',  'empty', 'fully', 'empty', 'empty', 'empty',  'fully', 'fully', 'empty', 'fully', 'fully',
                  'fully', 'fully', 'fully', 'fully', 'fully',  'empty', 'fully', 'empty', 'empty', 'empty',  'fully', 'fully', 'fully', 'fully', 'fully',


                  'fully', 'empty', 'empty', 'empty', 'fully',  'empty', 'fully', 'empty', 'empty', 'empty',  'fully', 'empty', 'empty', 'empty', 'fully',
                  'fully', 'empty', 'fully', 'empty', 'fully',  'empty', 'fully', 'empty', 'empty', 'empty',  'fully', 'empty', 'fully', 'empty', 'fully',
                  'fully', 'empty', 'fully', 'empty', 'fully',  'fully', 'fully', 'fully', 'fully', 'fully',  'fully', 'empty', 'fully', 'empty', 'fully',
                  'fully', 'empty', 'empty', 'empty', 'empty',  'empty', 'empty', 'empty', 'empty', 'empty',  'empty', 'empty', 'empty', 'empty', 'fully',
                  'fully', 'empty', 'empty', 'fully', 'empty',  'empty', 'empty', 'empty', 'empty', 'empty',  'empty', 'fully', 'empty', 'empty', 'fully',

                  'fully', 'empty', 'fully', 'fully', 'fully',  'empty', 'empty', 'fully', 'empty', 'empty',  'fully', 'fully', 'fully', 'empty', 'fully',
                  'fully', 'empty', 'empty', 'fully', 'empty',  'empty', 'fully', 'fully', 'fully', 'empty',  'empty', 'fully', 'empty', 'empty', 'fully',
                  'fully', 'empty', 'empty', 'fully', 'empty',  'empty', 'fully', 'fully', 'fully', 'empty',  'empty', 'fully', 'empty', 'empty', 'fully',
                  'fully', 'empty', 'empty', 'empty', 'empty',  'empty', 'fully', 'fully', 'fully', 'empty',  'empty', 'fully', 'empty', 'empty', 'fully',
                  'fully', 'fully', 'fully', 'fully', 'fully',  'fully', 'fully', 'fully', 'fully', 'fully',  'fully', 'fully', 'fully', 'fully', 'fully',
                   ],
              },
  }
}

export default games;